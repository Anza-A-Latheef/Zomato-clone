
const countries=[
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Algeria", code: "DZ", phone: 213 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1264 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaijan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Belize", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "Bermuda", code: "BM", phone: 1441 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "Brunei Darussalam", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Cameroon", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Cape Verde", code: "CV", phone: 238 },
    { name: "Cayman Islands", code: "KY", phone: 1345 },
    { name: "Central African Republic", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoros", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Cook Islands", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Czech Republic", code: "CZ", phone: 420 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "Dominican Republic", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
    { name: "Faroe Islands", code: "FO", phone: 298 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "French Guiana", code: "GF", phone: 594 },
    { name: "French Polynesia", code: "PF", phone: 689 },
    { name: "Gabon", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Grenada", code: "GD", phone: 1473 },
    { name: "Guadeloupe", code: "GP", phone: 590 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guyana", code: "GY", phone: 592 },
    { name: "Haiti", code: "HT", phone: 509 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Latvia", code: "LV", phone: 371 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Lesotho", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Libya", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lithuania", code: "LT", phone: 370 },
    { name: "Luxembourg", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Marshall Islands", code: "MH", phone: 692 },
    { name: "Martinique", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauritius", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 262 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Monaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "New Caledonia", code: "NC", phone: 687 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Niger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Panama", code: "PA", phone: 507 },
    { name: "Papua New Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Reunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russia", code: "RU", phone: 7 },
    { name: "Rwanda", code: "RW", phone: 250 },
    { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
    { name: "Saint Lucia", code: "LC", phone: 1758 },
    { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
    { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "Sao Tome and Principe", code: "ST", phone: 239 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leone", code: "SL", phone: 232 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "Slovakia", code: "SK", phone: 421 },
    { name: "Slovenia", code: "SI", phone: 386 },
    { name: "Solomon Islands", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Suriname", code: "SR", phone: 597 },
    { name: "Swaziland", code: "SZ", phone: 268 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Tajikistan", code: "TJ", phone: 992 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Togo", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
    { name: "Tunisia", code: "TN", phone: 216 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Turkmenistan", code: "TM", phone: 7370 },
    { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "UAE", code: "AE", phone: 971 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Vietnam", code: "VN", phone: 84 },
    { name: "Wallis and Futuna", code: "WF", phone: 681 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 }], 

    select_box= document.querySelector('.options'),
    selected_option_div= document.querySelector('.selected-option div'),
    selected_option = document.querySelector('.selected-option');
    let options = null;
    for(country of countries){
        const option = `
        <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone} </strong>
    </li>`;
    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option)
    options = document.querySelectorAll('.option')
    }

    function selectOption(){
        const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('strong').cloneNode(true);
        selected_option_div.innerHTML='';
        selected_option_div.append(icon,phone_code);
        select_box.classList.remove('active');
        selected_option_div.classList.remove('active');
        selected_option.classList.add('active')
    }
    selected_option_div.addEventListener('click',()=>{
        select_box.classList.toggle('active');
        selected_option_div.classList.toggle('active');
        selected_option.classList.add('active')
    })
    options.forEach(option=> option.addEventListener('click',selectOption));

    // display login-popup
    function displayPop(){
        document.getElementById("pop-cover").style.display="flex";
        document.body.style.overflow="hidden";
    }; 
    
    //close login-popup
    function closePop(){
        document.getElementById("pop-cover").style.display="none";
        document.body.style.overflow="scroll";
        select_box.classList.remove('active');
        selected_option_div.classList.toggle('active');
    };
    //close login-popup while clicking on background
    document.getElementById("back-space").addEventListener('click',closePop);

    //display signup-popup
    function displaySignup(){
      document.getElementById("signPop").style.visibility="visible";
      document.body.style.overflow="hidden";
      document.getElementById("signup").style.transform="scale(1)";
      // document.getElementById("signup").style.transition="1s ease-in";
      // document.getElementById("signup").style.transitionDelay="1s";
  };
  //close signup-popup
  function closeSignup(){
      document.getElementById("signPop").style.visibility="hidden";
      document.body.style.overflow="visible";
  };
  //close signup-popup while clicking on background
  document.getElementById("back-ground").addEventListener('click',closeSignup);

  // create account click
  document.querySelector(".create-account span").addEventListener('click',()=>{
      closePop();
      displaySignup();
    })
    //login click
    document.querySelector(".exist-account span").addEventListener('click',()=>{
      closeSignup();
      displayPop();
    })

//collapsible content

var coll = document.getElementsByClassName("toggleList");
for (let i = 0; i <= coll.length -1; i++) {
  coll[i].addEventListener("click", function() {
    var content = document.getElementsByClassName("toggleContent")[i];
    var rotate = document.getElementsByClassName("fa fa-angle-down")[i+1];
    if (content.style.display === "block") {
      rotate.style.transform="rotate(360deg)";
      rotate.style.transition="0.5";
      content.style.display = "none";
    } else {
      rotate.style.transform="rotate(180deg)";
      rotate.style.transition="0.5s";
      content.style.display = "block"; 
    }
  });
}

//country selection in footer section

const countryFlag=[
{ country_name: "Australia", code: "AU"},
{ country_name: "Brazil", code: "BR"},
{ country_name: "Canada", code: "CA"},
{ country_name: "Chile", code: "CL"},
{ country_name: "Czech Republic", code: "CZ"},
{ country_name: "India", code: "IN"},
{ country_name: "Indonesia", code: "ID"},
{ country_name: "Ireland", code: "IE"},
{ country_name: "Italy", code: "IT"},
{ country_name: "Lebanon", code: "LB"},
{ country_name: "Malaysia", code: "MY"},
{ country_name: "New Zealand", code: "NZ"},
{ country_name: "Philippines", code: "PH"},
{ country_name: "Poland", code: "PL"},
{ country_name: "Portugal", code: "PT"},
{ country_name: "Qatar", code: "QA"},
{ country_name: "Singapore", code: "SG"},
{ country_name: "Slovakia", code: "SK"},
{ country_name: "South Africa", code: "ZA"},
{ country_name: "Sri Lanka", code: "LK"},
{ country_name: "Turkey", code: "TR"},
{ country_name: "UAE", code: "AE"},
{ country_name: "United Kingdom", code: "GB"},
{ country_name: "USA", code: "US"}],
country_flag= document.querySelector('.country-options'),
countries_name = document.querySelector('.countries-name'),
countries_name_div= document.querySelector('.countries-name div');

let countryoptions=null;
  for(cntry of countryFlag){
    const cntryoption = `
      <li class="cntryoption">
        <div>
          <span class="iconify" data-icon="flag:${cntry.code.toLowerCase()}-4x3"></span>
          <p class="country-name">${cntry.country_name}</p>
        </div>
      </li>`;
    country_flag.querySelector('ol').insertAdjacentHTML('beforeend', cntryoption)
    countryoptions = document.querySelectorAll('.cntryoption')
    }
function selectCountry(){
  const iconifyElement = this.querySelector('.iconify');
  const dataIconValue = iconifyElement.getAttribute('data-icon');
  const name = this.querySelector('.country-name').cloneNode(true);
    tags = `
      <span class="iconify" data-icon="${dataIconValue}"></span>
      <p class="name">${name.textContent}</p>
      <i class="fa fa-angle-down" title="chevron-down"></i>`;
      countries_name.innerHTML='';
      countries_name.innerHTML=tags;
      country_flag.classList.toggle('active');
      countries_name.classList.toggle('active');
    }
    countries_name.addEventListener('click',()=>{
        country_flag.classList.toggle('active');
        countries_name_div.classList.toggle('active');
    })
    const countryOptions = document.querySelectorAll('.cntryoption');
    countryOptions.forEach(cntryoption=> cntryoption.addEventListener('click',selectCountry));
    
  //   window.addEventListener('click',(e)=>{
  //     if(e.target !== countries_name && countries_name_div.classList.contains('active')){

  //     // country_flag.classList.remove('active');
  //     // countries_name_div.classList.remove('active');
  //     }
  // })

  // window.addEventListener('click', (event) => {
    // // Get the selected option element.
    //   const selectedOptionElement = document.querySelector('.selected-option');
    
    // // If the event target is not the input element or the selected option element, then remove the style.
    //   if (event.target !== selectedOptionElement && event.target !== selectedOptionElement.querySelector('input[type="tel"]')) {
    //     selectedOptionElement.style.outline = '';
    //     selectedOptionElement.style.border = '';
    //   }
    // });


//language selection option

// const Languages=["English","Türkçe","हिंदी","Português (BR)","Indonesian","Português (PT)","Español","Čeština","Slovenčina","Polish","Italian","Vietnamese"];
// for(i=0;i<=Languages.length;i++){
//   document.(Languages[i]);
// }
