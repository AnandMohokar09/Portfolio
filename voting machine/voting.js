// JavaScript for Copy Button
document.getElementById("copyButton").addEventListener("click", function() {
    // Select the text inside the pre element
    var codeContent = document.getElementById("codeContent");
    var range = document.createRange();
    range.selectNode(codeContent);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  
    // Copy the selected text
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Unable to copy text');
    }
  
    // Remove the selection
    window.getSelection().removeAllRanges();
  });
  