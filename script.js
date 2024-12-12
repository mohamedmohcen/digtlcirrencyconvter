// Exchange rates with Algerian Dinar added
const exchangeRates = {
    USD: { USD: 1, EUR: 0.92, EGP: 30.9, GBP: 0.77, CAD: 1.37, JPY: 135.21, AUD: 1.49, CHF: 0.91, CNY: 7.19, INR: 82.45, BRL: 5.15, MXN: 18.08, ZAR: 19.35, KRW: 1322.45, SAR: 3.75, TRY: 27.08, AED: 3.67, KWD: 0.31, QAR: 3.64, BHD: 0.38, OMR: 0.38, JOD: 0.71, LYD: 4.74, SDG: 700, YER: 250, DZD: 138 },
    EUR: { USD: 1.09, EUR: 1, EGP: 33.6, GBP: 0.84, CAD: 1.49, JPY: 147.93, AUD: 1.62, CHF: 0.99, CNY: 7.81, INR: 89.65, BRL: 5.60, MXN: 19.61, ZAR: 21.05, KRW: 1435.87, SAR: 3.62, TRY: 29.43, AED: 3.99, KWD: 0.34, QAR: 3.95, BHD: 0.41, OMR: 0.41, JOD: 0.77, LYD: 5.16, SDG: 760, YER: 270, DZD: 150 },
    EGP: { USD: 0.032, EUR: 0.030, EGP: 1, GBP: 0.023, CAD: 0.045, JPY: 4.4, AUD: 0.048, CHF: 0.027, CNY: 0.22, INR: 2.68, BRL: 0.15, MXN: 0.55, ZAR: 0.65, KRW: 42.88, SAR: 0.12, TRY: 0.89, AED: 0.12, KWD: 0.01, QAR: 0.12, BHD: 0.01, OMR: 0.01, JOD: 0.02, LYD: 0.13, SDG: 22.5, YER: 8.2, DZD: 4.6 },
    SAR: { USD: 0.27, EUR: 0.28, EGP: 8.1, GBP: 0.21, CAD: 0.37, JPY: 36.0, AUD: 0.40, CHF: 0.24, CNY: 1.92, INR: 22.01, BRL: 1.37, MXN: 4.82, ZAR: 5.16, KRW: 353.79, SAR: 1, TRY: 7.49, AED: 0.98, KWD: 0.083, QAR: 0.97, BHD: 0.10, OMR: 0.10, JOD: 0.19, LYD: 1.27, SDG: 190, YER: 70, DZD: 138 },
    AED: { USD: 0.27, EUR: 0.25, EGP: 8.2, GBP: 0.21, CAD: 0.37, JPY: 36.3, AUD: 0.41, CHF: 0.24, CNY: 1.93, INR: 22.14, BRL: 1.38, MXN: 4.85, ZAR: 5.20, KRW: 355.10, SAR: 0.98, TRY: 7.53, AED: 1, KWD: 0.085, QAR: 0.97, BHD: 0.10, OMR: 0.10, JOD: 0.19, LYD: 1.28, SDG: 195, YER: 72, DZD: 139 },
    DZD: { USD: 0.0073, EUR: 0.0067, EGP: 0.22, GBP: 0.0054, CAD: 0.010, JPY: 0.98, AUD: 0.011, CHF: 0.0065, CNY: 0.045, INR: 0.57, BRL: 0.034, MXN: 0.12, ZAR: 0.14, KRW: 9.62, SAR: 0.0072, TRY: 0.054, AED: 0.0072, KWD: 0.00063, QAR: 0.007, BHD: 0.00073, OMR: 0.00073, JOD: 0.0014, LYD: 0.009, SDG: 1.61, YER: 0.60, DZD: 1 },
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    const resultElement = document.getElementById("result");
    resultElement.style.opacity = 0; // Fade out before updating

    setTimeout(() => {
        resultElement.innerText = result.toFixed(2);
        resultElement.style.opacity = 1; // Fade in after updating
    }, 300); // 300ms for fade effect
}
