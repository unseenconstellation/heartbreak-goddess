export let attrs = [
  { name: "Upper Strength", value: 5, id: 1 },
  { name: "Lower Strength", value: 5, id: 2 },
  { name: "Speed", value: 5, id: 3 },
  { name: "Intelligence", value: 5, id: 4 },
  { name: "Endurance", value: 5, id: 5 },
  { name: "Style", value: 5, id: 6 },
  { name: "Speech", value: 5, id: 7 },
  { name: "Fate", value: 5, id: 8 },
];
export let depAttrs = [

  {
    name: "Health",
    value: 10,
    id: 1,
    reliance: ["Endurance"],
    depend: function (endurance) {
      console.log(endurance)
      return this.value = endurance * 2
    },
    leftCard: false
  },
  //16.408 e^(0.630895 x)
  {
    name: "Lifting Power",
    value: Math.round(16.408 * Math.E ** (0.498895 * 5)),
    metricValue: Math.round(0.4535924 *16.408 * Math.E ** (0.498895 * 5)),
    id: 2,
    unit: "lb",
    metricUnit: "kg",
    reliance: ["Upper Strength", "Lower Strength"],
    depend: function (array) {
      let upperStrength = array[0].value
      let legStrength = array[1].value
      this.value = Math.round(16.408 * Math.E ** (0.498895 * ((.6 * legStrength) + (.4 * upperStrength))))
      this.metricValue = Math.round(this.value * 0.4535924)
    },
    leftCard: false
  },

  {
    name: "Movement Speed",
    value: Math.round(0.229689 * Math.E ** (0.764326 * 5)) + 3,
    metricValue: Math.round(Math.round(0.229689 * Math.E ** (0.764326 * 5)+3)*1.60934) ,
    unit:"mph",
    metricUnit: "km/h",
    id: 3, 
    reliance: ["Speed"],
    depend: function (speed) {
      this.value = Math.round(0.229689 * Math.E ** (0.764326 * speed)) + 3
      this.metricValue = Math.round((Math.round(0.229689 * Math.E ** (0.764326 * speed)) + 3)*1.60934)
    },
    leftCard: false
  },
  {
    name: "Charm",
    value: Math.round((0.2 * 5) + (0.4 * 5) + (0.4 * 5)*3),
    id: 4,
    reliance: ["Intelligence", "Style", "Speech"],
    depend: function (array) {
      let intel = array[0].value
      let style = array[1].value
      let speech = array[2].value
      this.value = Math.round((0.2 * intel) + (0.4 * style) + (0.4 * speech)*3)
    },
    leftCard: false
  },
  {
    name: "Max-Lust",
    value: 15,
    id: 5,
    reliance: ["Intelligence"],
    depend: function (intel) {
      this.value =  Math.round(intel*3)
    },
    leftCard: true
  },
  {
    name: "Sanity",
    value: 100,
    id: 6,
    reliance: ["Intelligence"],
    depend: function (intel) {
      Math.round(this.value = intel*20)
    },
    leftCard: true
  },

]