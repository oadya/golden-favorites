export class pdfHelper {
    // https://stackoverflow.com/questions/34436133/pdf-is-blank-when-downloading-using-javascript
    static base64ToArrayBuffer(data) {
        var binaryString = window.atob(data);
        var binaryLen = binaryString.length;
        var bytes = new Uint8Array(binaryLen);
        for (var i = 0; i < binaryLen; i++) {
            var ascii = binaryString.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes;
    };

    
    
  static openPdf(fileName: string, pdfDocument: string) {
    this.openFile(fileName, pdfDocument, "application/pdf");
  }
  
  static openFile(fileName: string, fileDocument: string, fileType: string) {
    var a = document.createElement("a");
    document.body.appendChild(a);

    const blob = new Blob(
      [pdfHelper.base64ToArrayBuffer(fileDocument)],
      { type: fileType});

    const fileURL = URL.createObjectURL(blob);

    a.href = fileURL;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(fileURL);
  }
}