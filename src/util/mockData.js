const flights = [
  { from: "Belarus", to: "Canada", date: "2021-06-19" },
  { from: "Belarus", to: "Argentina", date: "2021-06-19" },
  { from: "Belarus", to: "Bahamas", date: "2021-06-19" },

  { from: "Belarus", to: "Canada", date: "2021-06-17" },
  { from: "Belarus", to: "Argentina", date: "2021-06-17" },
  { from: "Belarus", to: "Bahamas", date: "2021-06-17" },

  { from: "Belarus", to: "Canada", date: "2021-06-18" },
  { from: "Belarus", to: "Argentina", date: "2021-06-18" },
  { from: "Belarus", to: "Bahamas", date: "2021-06-18" },

  { from: "Belarus", to: "Canada", date: "2021-06-19" },
  { from: "Belarus", to: "Argentina", date: "2021-06-19" },
  { from: "Belarus", to: "Bahamas", date: "2021-06-19" },

  { from: "Belarus", to: "Canada", date: "2021-06-19" },
  { from: "Belarus", to: "Argentina", date: "2021-06-19" },
  { from: "Belarus", to: "Bahamas", date: "2021-06-19" },

  { from: "Belarus", to: "Canada", date: "2021-06-19" },
  { from: "Belarus", to: "Argentina", date: "2021-06-19" },
  { from: "Belarus", to: "Bahamas", date: "2021-06-19" },

  { from: "Mexico", to: "Canada", date: "2021-06-19" },
  { from: "Mexico", to: "Argentina", date: "2021-06-19" },
  { from: "Mexico", to: "Bahamas", date: "2021-06-19" },

  { from: "Mexico", to: "Canada", date: "2021-06-17" },
  { from: "Mexico", to: "Argentina", date: "2021-06-17" },
  { from: "Mexico", to: "Bahamas", date: "2021-06-17" },

  { from: "Mexico", to: "Canada", date: "2021-06-18" },
  { from: "Mexico", to: "Argentina", date: "2021-06-18" },
  { from: "Mexico", to: "Bahamas", date: "2021-06-18" },

  { from: "Mexico", to: "Canada", date: "2021-06-19" },
  { from: "Mexico", to: "Argentina", date: "2021-06-19" },
  { from: "Mexico", to: "Bahamas", date: "2021-06-19" },

  { from: "Mexico", to: "Canada", date: "2021-06-19" },
  { from: "Mexico", to: "Argentina", date: "2021-06-19" },
  { from: "Mexico", to: "Bahamas", date: "2021-06-19" },

  { from: "Mexico", to: "Canada", date: "2021-06-19" },
  { from: "Mexico", to: "Argentina", date: "2021-06-19" },
  { from: "Mexico", to: "Bahamas", date: "2021-06-19" },
];

const cars = [
  { location: "Canada", date: "2021-06-19", carClass: "Economy" },
  { location: "Argentina", date: "2021-06-19", carClass: "Economy" },
  { location: "Bahamas", date: "2021-06-19", carClass: "Economy" },

  { location: "Canada", date: "2021-06-17", carClass: "Economy" },
  { location: "Argentina", date: "2021-06-17", carClass: "Economy" },
  { location: "Bahamas", date: "2021-06-17", carClass: "Economy" },

  { location: "Canada", date: "2021-06-18", carClass: "Economy" },
  { location: "Argentina", date: "2021-06-18", carClass: "Economy" },
  { location: "Bahamas", date: "2021-06-18", carClass: "Economy" },

  { location: "Canada", date: "2021-06-19", carClass: "Business" },
  { location: "Argentina", date: "2021-06-19", carClass: "Business" },
  { location: "Bahamas", date: "2021-06-19", carClass: "Business" },

  { location: "Canada", date: "2021-06-17", carClass: "Business" },
  { location: "Argentina", date: "2021-06-17", carClass: "Business" },
  { location: "Bahamas", date: "2021-06-17", carClass: "Business" },

  { location: "Canada", date: "2021-06-18", carClass: "Business" },
  { location: "Argentina", date: "2021-06-18", carClass: "Business" },
  { location: "Bahamas", date: "2021-06-18", carClass: "Business" },

  { location: "Belarus", date: "2021-06-19", carClass: "Economy" },
  { location: "Mexico", date: "2021-06-19", carClass: "Economy" },
  { location: "Bahamas", date: "2021-06-19", carClass: "Economy" },

  { location: "Belarus", date: "2021-06-17", carClass: "Economy" },
  { location: "Mexico", date: "2021-06-17", carClass: "Economy" },
  { location: "Bahamas", date: "2021-06-17", carClass: "Economy" },

  { location: "Belarus", date: "2021-06-18", carClass: "Economy" },
  { location: "Mexico", date: "2021-06-18", carClass: "Economy" },
  { location: "Bahamas", date: "2021-06-18", carClass: "Economy" },

  { location: "Belarus", date: "2021-06-19", carClass: "Business" },
  { location: "Mexico", date: "2021-06-19", carClass: "Business" },
  { location: "Bahamas", date: "2021-06-19", carClass: "Business" },

  { location: "Belarus", date: "2021-06-17", carClass: "Business" },
  { location: "Mexico", date: "2021-06-17", carClass: "Business" },
  { location: "Bahamas", date: "2021-06-17", carClass: "Business" },

  { location: "Belarus", date: "2021-06-18", carClass: "Business" },
  { location: "Mexico", date: "2021-06-18", carClass: "Business" },
  { location: "Bahamas", date: "2021-06-18", carClass: "Business" },
];

const hotels = [
  { location: "Canada", date: "2021-06-19", amenities: "1 star" },
  { location: "Argentina", date: "2021-06-19", amenities: "1 star" },
  { location: "Bahamas", date: "2021-06-19", amenities: "1 star" },

  { location: "Canada", date: "2021-06-17", amenities: "1 star" },
  { location: "Argentina", date: "2021-06-17", amenities: "1 star" },
  { location: "Bahamas", date: "2021-06-17", amenities: "1 star" },

  { location: "Canada", date: "2021-06-18", amenities: "1 star" },
  { location: "Argentina", date: "2021-06-18", amenities: "1 star" },
  { location: "Bahamas", date: "2021-06-18", amenities: "1 star" },

  { location: "Canada", date: "2021-06-19", amenities: "2 stars" },
  { location: "Argentina", date: "2021-06-19", amenities: "2 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "2 stars" },

  { location: "Canada", date: "2021-06-17", amenities: "2 stars" },
  { location: "Argentina", date: "2021-06-17", amenities: "2 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "2 stars" },

  { location: "Canada", date: "2021-06-18", amenities: "2 stars" },
  { location: "Argentina", date: "2021-06-18", amenities: "2 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "2 stars" },

  { location: "Canada", date: "2021-06-19", amenities: "3 stars" },
  { location: "Argentina", date: "2021-06-19", amenities: "3 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "3 stars" },

  { location: "Canada", date: "2021-06-17", amenities: "3 stars" },
  { location: "Argentina", date: "2021-06-17", amenities: "3 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "3 stars" },

  { location: "Canada", date: "2021-06-18", amenities: "3 stars" },
  { location: "Argentina", date: "2021-06-18", amenities: "3 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "3 stars" },

  { location: "Canada", date: "2021-06-19", amenities: "4 stars" },
  { location: "Argentina", date: "2021-06-19", amenities: "4 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "4 stars" },

  { location: "Canada", date: "2021-06-17", amenities: "4 stars" },
  { location: "Argentina", date: "2021-06-17", amenities: "4 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "4 stars" },

  { location: "Canada", date: "2021-06-18", amenities: "4 stars" },
  { location: "Argentina", date: "2021-06-18", amenities: "4 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "4 stars" },

  { location: "Canada", date: "2021-06-19", amenities: "5 stars" },
  { location: "Argentina", date: "2021-06-19", amenities: "5 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "5 stars" },

  { location: "Canada", date: "2021-06-17", amenities: "5 stars" },
  { location: "Argentina", date: "2021-06-17", amenities: "5 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "5 stars" },

  { location: "Canada", date: "2021-06-18", amenities: "5 stars" },
  { location: "Argentina", date: "2021-06-18", amenities: "5 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "5 stars" },

  { location: "Belarus", date: "2021-06-19", amenities: "1 star" },
  { location: "Mexico", date: "2021-06-19", amenities: "1 star" },
  { location: "Bahamas", date: "2021-06-19", amenities: "1 star" },

  { location: "Belarus", date: "2021-06-17", amenities: "1 star" },
  { location: "Mexico", date: "2021-06-17", amenities: "1 star" },
  { location: "Bahamas", date: "2021-06-17", amenities: "1 star" },

  { location: "Belarus", date: "2021-06-18", amenities: "1 star" },
  { location: "Mexico", date: "2021-06-18", amenities: "1 star" },
  { location: "Bahamas", date: "2021-06-18", amenities: "1 star" },

  { location: "Belarus", date: "2021-06-19", amenities: "2 stars" },
  { location: "Mexico", date: "2021-06-19", amenities: "2 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "2 stars" },

  { location: "Belarus", date: "2021-06-17", amenities: "2 stars" },
  { location: "Mexico", date: "2021-06-17", amenities: "2 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "2 stars" },

  { location: "Belarus", date: "2021-06-18", amenities: "2 stars" },
  { location: "Mexico", date: "2021-06-18", amenities: "2 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "2 stars" },

  { location: "Belarus", date: "2021-06-19", amenities: "3 stars" },
  { location: "Mexico", date: "2021-06-19", amenities: "3 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "3 stars" },

  { location: "Belarus", date: "2021-06-17", amenities: "3 stars" },
  { location: "Mexico", date: "2021-06-17", amenities: "3 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "3 stars" },

  { location: "Belarus", date: "2021-06-18", amenities: "3 stars" },
  { location: "Mexico", date: "2021-06-18", amenities: "3 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "3 stars" },

  { location: "Belarus", date: "2021-06-19", amenities: "4 stars" },
  { location: "Mexico", date: "2021-06-19", amenities: "4 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "4 stars" },

  { location: "Belarus", date: "2021-06-17", amenities: "4 stars" },
  { location: "Mexico", date: "2021-06-17", amenities: "4 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "4 stars" },

  { location: "Belarus", date: "2021-06-18", amenities: "4 stars" },
  { location: "Mexico", date: "2021-06-18", amenities: "4 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "4 stars" },

  { location: "Belarus", date: "2021-06-19", amenities: "5 stars" },
  { location: "Mexico", date: "2021-06-19", amenities: "5 stars" },
  { location: "Bahamas", date: "2021-06-19", amenities: "5 stars" },

  { location: "Belarus", date: "2021-06-17", amenities: "5 stars" },
  { location: "Mexico", date: "2021-06-17", amenities: "5 stars" },
  { location: "Bahamas", date: "2021-06-17", amenities: "5 stars" },

  { location: "Belarus", date: "2021-06-18", amenities: "5 stars" },
  { location: "Mexico", date: "2021-06-18", amenities: "5 stars" },
  { location: "Bahamas", date: "2021-06-18", amenities: "5 stars" },
];

const mockData = [
  { type: "cars", data: cars },
  { type: "flights", data: flights },
  { type: "hotels", data: hotels },
];

export default mockData;
