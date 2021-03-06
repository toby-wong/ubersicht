#!/bin/bash

read -r running <<<"$(ps -ef | grep \"MacOS/Spotify\" | grep -v \"grep\" | wc -l)" && 
test $running != 0 &&
IFS='|' read -r theArtist theName <<<"$(osascript <<<'tell application "Spotify"
        set theTrack to current track
        set theArtist to artist of theTrack
        set theName to name of theTrack
        return theArtist & "|" & theName
    end tell')" 
if [ -z "$theArtist" ]
then
    echo ""
else
    echo "$theArtist - $theName" || echo "Not Connected To Spotify"
fi