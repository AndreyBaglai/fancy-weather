class Forecast {
    constructor(el, data) {
        this.markup = this.renderForecast(el, data);
    }

    renderForecast(map, data) {
        return `<main>
                    <div class="main-content grow">
                        <div class="black-bg">
                            <div class="state">
                                <p class="country">${this.setCountry(data.country)},</p>
                                <p class="city">${data.city}</p>
                            </div>
                        </div>

                        <div class="black-bg">
                            <div class="current-date">
                                <p>${this.setDate('en')}<span class="clock">${this.clock()}</span></p>
                            </div>
                        </div>

                        <div class="black-bg">
                            <div class="forecast">
                                <div class="temperature-value">
                                    <div id="temperatureNumber">${data.temperature}</div>
                                    <div id="temperatureDegrees">&#176;</div>
                                </div>

                                <div class="description">
                                    <canvas id="icon"></canvas>
                                    <ul class="description-weather">
                                        <li>${data.description.summary}</li>
                                        <li>WIND: ${data.description.windSpeed} M/S</li>
                                        <li>HUMIDITY: ${this.setHumidity(data.description.humidity)}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    ${map}
                </main>`;
    }

    setIconWeather(iconText, el) {
        const skycons = new Skycons({ color: 'white' });
        const icon = iconText.replace(/-/g, '_').toUpperCase();

        skycons.play();
        return skycons.set(el, Skycons[icon]);
    }

    setDate(lang) {
        const options = {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        };
        return new Date().toLocaleString(lang, options);
    }

    setHumidity(val) {
        return Math.floor(val * 100) + '%';
    }

    clock() {
        const time = new Date();

        let hh = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        let mm = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
        let ss = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

        return hh + ':' + mm + ':' + ss;
    }

    setCountry(country) {
        const countries = {
            AB: 'Abkhazia',
            AU: 'Australia',
            AT: 'Austria',
            AZ: 'Azerbaijan',
            AX: 'Aland Islands',
            AL: 'Albania',
            DZ: 'Algeria',
            AI: 'Anguilla',
            AO: 'Angola',
            AD: 'Andorra',
            AQ: 'Antarctica',
            AG: 'Antigua and Barbuda',
            AR: 'Argentina',
            AM: 'Armenia',
            AW: 'Aruba',
            AF: 'Afghanistan',
            BS: 'Bahamas',
            BD: 'Bangladesh',
            BB: 'Barbados',
            BH: 'Bahrain',
            BY: 'Belarus',
            BZ: 'Belize',
            BE: 'Belgium',
            BJ: 'Benin',
            BM: 'Bermuda',
            BG: 'Bulgaria',
            BO: 'Bolivia',
            BA: 'Bosnia and Herzegowina',
            BW: 'Botswana',
            BR: 'Brazil',
            VG: 'British Virgin Islands',
            BN: 'Brunei Darussalam',
            BF: 'Burkina Faso',
            BI: 'Burundi',
            BT: 'Bhutan',
            VU: 'Vanuatu',
            VA: 'Vatican City State',
            GB: 'United Kingdom',
            HU: 'Hungary',
            VE: 'Venezuela',
            VI: 'Virgin Islands',
            AC: 'Ascension Island',
            VN: 'Viet Nam',
            GA: 'Gabon',
            HT: 'Haiti',
            GY: 'Guyana',
            GM: 'Gambia',
            GH: 'Ghana',
            GP: 'Guadeloupe',
            GT: 'Guatemala',
            GW: 'Guinea-Bissau',
            DE: 'Germany',
            GI: 'Gibraltar',
            HN: 'Honduras',
            HK: 'Hong Kong',
            GD: 'Grenada',
            GL: 'Greenland',
            GR: 'Greece',
            GE: 'Georgia',
            GU: 'Guam',
            DK: 'Denmark',
            DJ: 'Djibouti',
            DM: 'Dominica',
            DO: 'Dominican Republic',
            EG: 'Egypt',
            ZM: 'Zambia',
            ZW: 'Zimbabwe',
            IL: 'Israel',
            IN: 'India',
            ID: 'Indonesia',
            JO: 'Jordan',
            IQ: 'Iraq',
            IR: 'Iran',
            IE: 'Ireland',
            IS: 'Iceland',
            ES: 'Spain',
            IT: 'Italy',
            YE: 'Yemen',
            CV: 'Cabo Verde',
            KZ: 'Kazakhstan',
            KY: 'Cayman Islands',
            KH: 'Cambodia',
            CM: 'Cameroon',
            CA: 'Canada',
            QA: 'Qatar',
            KE: 'Kenya',
            CY: 'Cyprus',
            KG: 'Kyrgyzstan',
            KI: 'Kiribati',
            CN: 'China',
            KP: 'Korea',
            CC: 'Cocos Islands',
            CO: 'Colombia',
            KM: 'Comoros',
            CD: 'Congo',
            CG: 'Congo Republic',
            KR: 'Korea',
            CR: 'Costa Rica',
            CI: 'Cote D Ivoire',
            CU: 'Cuba',
            KW: 'Kuwait',
            CK: 'Cook Islands',
            LA: 'Lao People s Democratic Republic',
            LV: 'Latvia',
            LS: 'Lesotho',
            LR: 'Liberia',
            LB: 'Lebanon',
            LY: 'Libyan Arab Jamahiriya',
            LT: 'Lithuania',
            LI: 'Liechtenstein',
            LU: 'Luxembourg',
            MU: 'Mauritius',
            MR: 'Mauritania',
            MG: 'Madagascar',
            YT: 'Mayotte',
            MO: 'Macau',
            MK: 'Macedonia',
            MW: 'Malawi',
            MY: 'Malaysia',
            ML: 'Mali',
            MV: 'Maldives',
            MT: 'Malta',
            MA: 'Morocco',
            MQ: 'Martinique',
            MH: 'Marshall Islands',
            MX: 'Mexico',
            FM: 'Micronesia',
            MZ: 'Mozambique',
            MD: 'Moldova',
            MC: 'Monaco',
            MN: 'Mongolia',
            MS: 'Montserrat',
            MM: 'Myanmar',
            NA: 'Namibia',
            NP: 'Nepal',
            NE: 'Niger',
            NG: 'Nigeria',
            NL: 'Netherlands',
            NI: 'Nicaragua',
            NU: 'Niue',
            NZ: 'New Zealand',
            NC: 'New Caledonia',
            NO: 'Norway',
            NF: 'Norfolk Island',
            AE: 'United Arab Emirates',
            OM: 'Oman',
            PK: 'Pakistan',
            PW: 'Palau',
            PS: 'Palestine',
            PA: 'Panama',
            PG: 'Papua New Guinea',
            PY: 'Paraguay',
            PE: 'Peru',
            PN: 'Pitcairn Islands',
            PL: 'Poland',
            PT: 'Portugal',
            PR: 'Puerto Rico',
            RE: 'Reunion',
            CX: 'Christmas Island',
            RU: 'Russia',
            RW: 'Rwanda',
            RO: 'Romania',
            SV: 'El Salvador',
            WS: 'Samoa',
            AS: 'American Samoa',
            SM: 'San Marino',
            ST: 'Sao Tome and Principe',
            SA: 'Saudi Arabia',
            SZ: 'Swaziland',
            SH: 'Saint Helena',
            MP: 'Northern Mariana Islands',
            SC: 'Seychelles',
            BL: 'Saint Barthelemy',
            MF: 'Saint-Martin',
            PM: 'Saint Pierre and Miquelon',
            SN: 'Senegal',
            VC: 'Saint Vincent and the Grenadines',
            KN: 'Saint Kitts and Nevis',
            LC: 'Saint Lucia',
            RS: 'Serbia',
            SG: 'Singapore',
            SY: 'Syrian Arab Republic',
            SK: 'Slovakia',
            SI: 'Slovenia',
            SB: 'Solomon Islands',
            SO: 'Somalia',
            SD: 'Sudan',
            SR: 'Suriname',
            US: 'United States',
            SL: 'Sierra Leone',
            TJ: 'Tajikistan',
            TH: 'Thailand',
            TW: 'Taiwan',
            TZ: 'Tanzania',
            TC: 'Turks and Caicos Islands',
            TG: 'Togo',
            TK: 'Tokelau',
            TO: 'Tonga',
            TT: 'Trinidad and Tobago',
            TV: 'Tuvalu',
            TN: 'Tunisia',
            TM: 'Turkmenistan',
            TR: 'Turkey',
            UG: 'Uganda',
            UZ: 'Uzbekistan',
            UA: 'Ukraine',
            WF: 'Wallis and Futuna',
            UY: 'Uruguay',
            FO: 'Faroe Islands',
            FJ: 'Fiji',
            PH: 'Philippines',
            FI: 'Finland',
            FK: 'Falkland Islands',
            FR: 'France',
            PF: 'French Polynesia',
            HM: 'Heard Island and McDonald Islands',
            HR: 'Croatia',
            CF: 'Central African Republic',
            TD: 'Chad',
            ME: 'Montenegro',
            CZ: 'Czech',
            CL: 'Chile',
            CH: 'Switzerland',
            LK: 'Sri Lanka',
            EC: 'Ecuador',
            GQ: 'Equatorial Guinea',
            EE: 'Estonia',
            ET: 'Ethiopia',
            ZA: 'South Africa',
            GS: 'South Georgia and the South Sandwich Islands',
            JM: 'Jamaica',
            JP: 'Japan'
        };

        return countries[country];
    }
}
