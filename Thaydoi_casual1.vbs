' Đường dẫn đến tệp HTML cần chỉnh sửa
Dim htmlFilePath
htmlFilePath = "C:\Users\baolhp.UNITEK\OneDrive - University of Transport and Communications\trasuxingfucha_default\trasuaxingfucha11\index.html"

' Nhập giá trị x từ bàn phím
Dim x
x = InputBox("Enter the value of x:")

' Mở tệp HTML
Dim fso, inputFile
Set fso = CreateObject("Scripting.FileSystemObject")
Set inputFile = fso.OpenTextFile(htmlFilePath, 1)
Dim fileContents
fileContents = inputFile.ReadAll
inputFile.Close

' Tìm dòng chứa <!-- hinhcasal1 -->
Dim lines
lines = Split(fileContents, vbCrLf)
Dim i, lineNumber
For i = LBound(lines) To UBound(lines)
    If InStr(1, lines(i), "<!-- hinhcasal1 -->") > 0 Then
        lineNumber = i + 1 ' Lấy số dòng tiếp theo
        Exit For
    End If
Next

' Thực hiện thay thế ở dòng lineNumber
If lineNumber > 0 Then
    lines(lineNumber) = "<img src=""" & x & """ style=""width: 100%"" />"
    fileContents = Join(lines, vbCrLf)
    
    ' Ghi nội dung mới vào tệp
    Dim outputFile
    Set outputFile = fso.CreateTextFile(htmlFilePath, True)
    outputFile.Write fileContents
    outputFile.Close
    
    ' Thông báo hoàn thành
    MsgBox "Replacement completed successfully!", vbInformation
Else
    MsgBox "Error: Unable to find the line below <!-- hinhcasal1 -->.", vbExclamation
End If
