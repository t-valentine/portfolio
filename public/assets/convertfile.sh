read -p "File name w/type: " file
fileArr=(${file//./ })
cwebp $file -o ${fileArr[0]}.webp
rm $file
echo "Converted "$file" to "${fileArr[0]}".webp"
