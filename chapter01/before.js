const invoices = require('./invoices.json')
const plays = require('./plays.json')

function statment(invoice, plays) {
    let result = `청구 내역 (고객명: ${invoice.customer})\n`;

    for (let perf of invoice.perfomances) {
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    }
    result += `총액: ${usd(totalAmount(invoice))}\n`;
    result += `적립 포인트: ${totalVolumeCredits(invoice)}점\n`;
    return result;
}

function totalAmount(invoice) {
    let totalAmount = 0;
    for (let perf of invoice.perfomances) {
        // 청구 내역 출력
        totalAmount += amountFor(perf);
    }
}

function totalVolumeCredits(invoice) {
    let result = 0;
    for (let perf of invoice.perfomances) {
        result += volumeCreditsFor(perf);
    }
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
    {
        style : "currency", currency : "USD",
        minimumFractionDigits : 2
    }).format(aNumber / 100);
}

function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type) 
        result += Math.floor(aPerformance.audience / 5);
    return result;
}

function playFor(aPerformance) {
    return plays[aPerformance.playID];
}

function amountFor(aPerformance) {
    let result = 0;

    switch (playFor(aPerformance).type) {
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
    return result;
}

console.log(statment(invoices[0], plays));