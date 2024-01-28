class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Calculate the mean (average) of the data
    calculateMean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    // Calculate the median of the data
    calculateMedian() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        // If the array has an even length, take the average of the two middle values
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        // If the array has an odd length, return the middle value
        return sortedData[middleIndex];
      }
    }
  
    // Calculate the mode of the data
    calculateMode() {
      const frequencyMap = new Map();
  
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let maxFrequency = 0;
      let mode = [];
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          mode = [value];
        } else if (frequency === maxFrequency) {
          mode.push(value);
        }
      });
  
      return mode;
    }
  
    // Calculate the standard deviation of the data
    calculateStandardDeviation() {
      const mean = this.calculateMean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - mean, 2));
      const variance = squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
      return Math.sqrt(variance);
    }
  
    // Calculate the range of the data
    calculateRange() {
      const max = Math.max(...this.data);
      const min = Math.min(...this.data);
      return max - min;
    }
  }
  
  // Example usage
  const data = [10, 15, 20, 25, 30, 30, 35, 40];
  const stats = new DescriptiveStatistics(data);
  
  console.log("Mean:", stats.calculateMean());
  console.log("Median:", stats.calculateMedian());
  console.log("Mode:", stats.calculateMode());
  console.log("Standard Deviation:", stats.calculateStandardDeviation());
  console.log("Range:", stats.calculateRange());
  