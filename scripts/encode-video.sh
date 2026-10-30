#!/bin/bash
# usage: scripts/encode-video.sh <input> <slug> <preview_start_seconds> [poster_seconds]
set -e
in="$1"; slug="$2"; ps="$3"; out=public/work
dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in")
w=$(ffprobe -v error -select_streams v:0 -show_entries stream=width -of csv=p=0 "$in")
h=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$in")
if [ "$w" -gt "$h" ]; then sc="scale=1280:-2"; pv="scale=640:-2"; else sc="scale=720:-2"; pv="scale=360:-2"; fi
# cap full video at ~20MB
vb=$(python3 -c "print(min(2200, int(20*8*1000/$dur - 110)))")
ffmpeg -v error -y -i "$in" -vf "$sc" -c:v libx264 -preset veryfast -b:v ${vb}k -maxrate $((vb*3/2))k -bufsize $((vb*2))k -pix_fmt yuv420p -c:a aac -b:a 96k -ac 2 -movflags +faststart "$out/$slug.mp4"
ffmpeg -v error -y -ss "$ps" -t 6 -i "$in" -vf "$pv,fps=25" -an -c:v libx264 -preset veryfast -crf 30 -pix_fmt yuv420p -movflags +faststart "$out/$slug-preview.mp4"
ffmpeg -v error -y -ss "${4:-$((${ps%.*}+1))}" -i "$in" -frames:v 1 -vf "$sc" -q:v 4 "$out/$slug.jpg"
echo "$slug ${w}x${h} dur=$dur vb=$vb $(du -h $out/$slug.mp4 | cut -f1) prev=$(du -h $out/$slug-preview.mp4 | cut -f1)"
