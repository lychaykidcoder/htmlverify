 document.getElementById('codeForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const userCode = document.getElementById('code').value;
            const messageElement = document.getElementById('message');
            if (userCode === 'LYZ2BK') {
                messageElement.style.color = 'green';
                messageElement.innerHTML = 'កូដត្រឹមត្រូវសូមចុចលើ <a href="certificate-lychay-result.html" target="_self" class="adone" >Link ដើម្បីបន្ត<span><img src="real.jpg" alt="correct" class="true"></span></a>';
            }
            else {
                messageElement.style.color = 'red';
                messageElement.innerHTML = 'កូដមិនត្រឹមត្រូមទេសូមពិនិត្យនិងព្យាយាមម្ដងទៀត';
            }
        });