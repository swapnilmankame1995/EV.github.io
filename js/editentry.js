//  Created by Swapnil Mankame
//  Copyright 2020. All rights reserved.

function editResponce() {
  var response = [];
  var emailslst = [];
  var emailresponce = document.getElementById("InputEmail").value;
  console.log(emailresponce);

  new RGraph.Sheets('186WP_S-Th-njmMzMCq0dacfMTYU2MPumiT727llCXLI', function(sheet) {
    var data = [];
    for (row = 2; data !== null; row++) {
      // loop through all rows in one column
      data = sheet.get("B" + row); //data variable stores all the values from the selected single column
      //traversing through the col until null value is reached, then break from loop
      // console.log(data);
      if (data == null) {
        // console.log(data);
        break;
      }
      response.push(data);
      // console.log(arrayLength);
    }
    var arrayLength = response.length;
    // --------------------------------
    var emails = [];
    for (x = 2; x < arrayLength + 2; x++) {
      // loop through all rows in one column
      email = sheet.get("B" + ([x])); //email variable stores all the name from the selected single column with a yes response

      emails.push(email);
    }

    response.forEach(nameFilter);
    function nameFilter(currentElement, index, array) {
      // console.log(emailresponce);
      if (emailresponce == currentElement) {
        indexpos = index;
        // console.log(indexpos);

      }

    }

    var responceURLs = [];

    for (x = 02; x < arrayLength + 2; x++) {
      // loop through all rows in one column
      respURl = sheet.get("BL" + ([x])); //disc variable stores all the name from the selected single column with a yes response
      // console.log(indexpos[x] + 2);
      responceURLs.push(respURl);
    }

    var emailBody =
      '<html>' +
      '<head>' +
      '<title></title>' +
      '<link href="https://svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/css/wsc.css" rel="stylesheet" type="text/css" />' +
      '</head>' +
      '<body aria-readonly="false">Hey There, This Message is from the EV suppliers list!&nbsp;<br />' +
      '<br />' +
      'Here is the link to your Form Response. Click the link below to edit.<br />' +
      '<br />' +
      responceURLs[indexpos] + '<br />' +
      '<br />' +
      'Thank you for showing your support<br />' +
      '<br />' +
      'Regards<br />' +
      'Swapnil Mankame<br />'+
      'CEO Mankame Automotive<br />'+
      'R&D Head eMatrixMile<br />'+
      '</body>' +
      '</html>';

      Email.send({
        SecureToken: "8bb3ffd7-a6ac-4652-8eff-774ee05ed50d",
        To: emails[indexpos],
        From: "swapnilmankame@Evlist.com",
        Subject: "EV list editing link",
        Body: emailBody
      }).then(
        message => alert("Email Sent, Check your registered mail for the edit link")

      );

  });

}
