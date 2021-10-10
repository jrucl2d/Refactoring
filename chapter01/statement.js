const { createStatementdata } = require('./createStatementData');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

function statment(invoice, plays) {
    return renderPlainText(createStatementdata(invoice, plays));
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.perfomances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
    }
    result += `총액: ${usd(data.totalAmount)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    return result;
    
    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
        {
            style : "currency", currency : "USD",
            minimumFractionDigits : 2
        }).format(aNumber / 100);
    }
}

console.log(statment(invoices[0], plays));