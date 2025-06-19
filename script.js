document.getElementById("calculatorForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const provider = document.getElementById("provider").value;
  const instanceType = document.getElementById("instanceType").value;
  const hours = parseInt(document.getElementById("hours").value);
  const storage = parseInt(document.getElementById("storage").value);

  const pricing = {
    aws: {
      "t2.micro": 0.0116,
      "t2.medium": 0.0464,
      storage: 0.10
    },
    gcp: {
      "t2.micro": 0.012,
      "t2.medium": 0.050,
      storage: 0.09
    },
    azure: {
      "t2.micro": 0.013,
      "t2.medium": 0.055,
      storage: 0.11
    }
  };

  const usdToInr = 83.5; // 1 USD = 83.5 INR

  const rate = pricing[provider][instanceType];
  const storageRate = pricing[provider]["storage"];

  const instanceCost = rate * hours;
  const storageCost = storageRate * storage;
  const totalUSD = instanceCost + storageCost;
  const totalINR = (totalUSD * usdToInr).toFixed(2);

  document.getElementById("result").innerText = `Estimated Monthly Cost: ₹${totalINR}`;
});
