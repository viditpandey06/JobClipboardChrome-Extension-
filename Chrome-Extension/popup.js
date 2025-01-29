document.addEventListener('DOMContentLoaded', function () {
    const dataContainer = document.getElementById('data-container');
  
    // Hardcoded data
    const jobData = {
      "Name": "John Doe",
      "Email": "john.doe@example.com",
      "Phone": "+1234567890",
      "LinkedIn": "https://linkedin.com/in/johndoe",
      "GitHub": "https://github.com/johndoe",
      "Portfolio": "https://johndoeportfolio.com"
      
    };
  
    // Add each field to the UI with a copy icon
    for (const [key, value] of Object.entries(jobData)) {
      const fieldContainer = document.createElement('div');
      fieldContainer.className = 'field-container';
  
      const fieldText = document.createElement('span');
      fieldText.textContent = `${key}: ${value}`;
  
      const copyIcon = document.createElement('button');
      copyIcon.textContent = 'V';
      copyIcon.className = 'copy-icon';
      copyIcon.addEventListener('click', function () {
        navigator.clipboard.writeText(value).then(function () {
            console.log('Copied to clipboard');
        }, function (err) {
          console.error('Could not copy text: ', err);
        });
      });
  
      fieldContainer.appendChild(copyIcon);
      fieldContainer.appendChild(fieldText);
      dataContainer.appendChild(fieldContainer);
    }
  });