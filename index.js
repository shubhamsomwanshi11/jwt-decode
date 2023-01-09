function encodeJWT(payload) {
    var header = {
      "alg": "none",
      "typ": "JWT"
    };
  
    var stringifiedHeader = JSON.stringify(header);
    var encodedHeader = btoa(stringifiedHeader);
  
    var stringifiedPayload = JSON.stringify(payload);
    var encodedPayload = btoa(stringifiedPayload);
  
    return encodedHeader + "." + encodedPayload + ".";
  }
  
function decodeJWT(token) {
    // Split the token into three parts: the header, the payload, and the signature
    const [header, payload, signature] = token.split('.');

    // Base64-decode the header and payload
    const decodedHeader = JSON.parse(atob(header));
    const decodedPayload = JSON.parse(atob(payload));

    // Return an object with the decoded header and payload
    return {
        header: decodedHeader,
        payload: decodedPayload,
    };
}

function Decode() {
    try {
        const token = document.getElementById("inputarea").value;
    if (token == "") {
        alert("Please Enter JWT code to be Decoded!")
    }
    const decoded = decodeJWT(token);
    document.getElementById("outputarea").value = JSON.stringify(decoded, null, 4)
    } catch (error) {
        alert("Please enter valid JWT");
    }
    
}

function Encode() {
    try {
        try {
            var textarea = document.getElementById("outputarea");
            var json = JSON.parse(textarea.value);
            var payload = json.payload;
            document.getElementById("inputarea").value = encodeJWT(payload);
            
          } catch(error) {
            console.error(error);  // Output: the error message
            alert("The JSON is invalid or does not have the required properties. Please enter a valid JSON string with the 'payload' and 'secret' properties.");
          }
          
    }
    catch (error) {
        console.log(error);
    }
}