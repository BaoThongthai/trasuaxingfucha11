@echo off
setlocal enabledelayedexpansion

set "file_path=C:\Users\baolhp.UNITEK\OneDrive - University of Transport and Communications\trasuxingfucha_default\trasuaxingfucha11\index.html"

REM Kiểm tra xem tệp tồn tại không
if not exist ""C:\Program Files\Notepad++\notepad++.exe"" (
    echo Tệp không tồn tại
    exit /b
)

REM Mở tệp HTML bằng Notepad++
start notepad++ "%file_path%"

REM Delay một khoảng thời gian để Notepad++ mở tệp
timeout /t 1 >nul

REM Đường dẫn mới phải được nhập trong dấu ngoặc kép để đảm bảo không có ký tự đặc biệt
set /p new_src="Nhập đường dẫn mới cho thuộc tính src: "

REM Sử dụng PowerShell để thay đổi nội dung của tệp HTML
powershell -Command "(gc '%file_path%') -replace '<img src=""Img/cs1.png"" style=""width: 100%"" />', '<img src=""!new_src!"" style=""width: 100%"" />' | Out-File '%file_path%' -Force"

echo Đã cập nhật src của hình ảnh thành: !new_src!
