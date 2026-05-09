// Sample restaurant predictions data (India-focused)
const samplePredictions = [
    { name: "Punjab Di Rasoi", city: "mumbai", cuisine: "punjabi", priceRange: "moderate", successScore: 88, area: "high-street", populationDensity: "high" },
    { name: "Madras Coffee House", city: "chennai", cuisine: "south-indian-general", priceRange: "economy", successScore: 92, area: "residential", populationDensity: "high" },
    { name: "Biryani Blues", city: "hyderabad", cuisine: "biryani", priceRange: "economy", successScore: 95, area: "cbd", populationDensity: "very-high" },
    { name: "Kolkata Kathi Roll", city: "kolkata", cuisine: "kolkata-kathi", priceRange: "budget", successScore: 90, area: "high-street", populationDensity: "very-high" },
    { name: "Gujarati Thali House", city: "ahmedabad", cuisine: "gujarati", priceRange: "moderate", successScore: 85, area: "residential", populationDensity: "medium" },
    { name: "Maharashtrian Misal", city: "pune", cuisine: "maharashtrian", priceRange: "budget", successScore: 87, area: "high-street", populationDensity: "high" },
    { name: "Chettinad Spice", city: "chennai", cuisine: "chettinad", priceRange: "premium", successScore: 78, area: "cbd", populationDensity: "very-high" },
    { name: "Lucknowi Kebabs", city: "lucknow", cuisine: "awadhi", priceRange: "moderate", successScore: 82, area: "tourist", populationDensity: "high" },
    { name: "Goan Seafood Shack", city: "mumbai", cuisine: "goan", priceRange: "premium", successScore: 75, area: "tourist", populationDensity: "very-high" },
    { name: "Rajasthani Dal Baati", city: "jaipur", cuisine: "rajasthani", priceRange: "moderate", successScore: 86, area: "tourist", populationDensity: "medium" },
    { name: "Indo-Chinese Wok", city: "bangalore", cuisine: "indo-chinese", priceRange: "economy", successScore: 91, area: "tech-park", populationDensity: "high" },
    { name: "Street Food Paradise", city: "delhi", cuisine: "street-food", priceRange: "budget", successScore: 93, area: "high-street", populationDensity: "very-high" },
    { name: "Bengali Sweets", city: "kolkata", cuisine: "bengali", priceRange: "economy", successScore: 84, area: "residential", populationDensity: "very-high" },
    { name: "Kerala Sadhya", city: "bangalore", cuisine: "kerala", priceRange: "moderate", successScore: 83, area: "residential", populationDensity: "high" },
    { name: "Mumbai Chaat Center", city: "mumbai", cuisine: "chaat", priceRange: "budget", successScore: 89, area: "high-street", populationDensity: "very-high" },
    { name: "Andhra Spicy Kitchen", city: "hyderabad", cuisine: "andhra", priceRange: "moderate", successScore: 81, area: "residential", populationDensity: "high" },
    { name: "Pav Bhaji Corner", city: "mumbai", cuisine: "pav-bhaji", priceRange: "budget", successScore: 94, area: "high-street", populationDensity: "very-high" },
    { name: "Vada Pav Plaza", city: "pune", cuisine: "vada-pav", priceRange: "budget", successScore: 90, area: "high-street", populationDensity: "high" },
    { name: "Momos Point", city: "delhi", cuisine: "momos", priceRange: "budget", successScore: 88, area: "university", populationDensity: "very-high" },
    { name: "Chhole Bhature Hub", city: "delhi", cuisine: "chhole-bhature", priceRange: "budget", successScore: 91, area: "high-street", populationDensity: "very-high" },
    { name: "Dosa Express", city: "chennai", cuisine: "dosa-idli", priceRange: "economy", successScore: 93, area: "high-street", populationDensity: "very-high" },
    { name: "Rolls & Kathi", city: "kolkata", cuisine: "rolls-kathi", priceRange: "budget", successScore: 87, area: "high-street", populationDensity: "very-high" },
    { name: "Fine Dining Royal", city: "mumbai", cuisine: "fine-dining-indian", priceRange: "luxury", successScore: 72, area: "cbd", populationDensity: "very-high" },
    { name: "Modern Indian Bistro", city: "bangalore", cuisine: "modern-indian", priceRange: "premium", successScore: 79, area: "cbd", populationDensity: "high" },
    { name: "Pure Veg Kitchen", city: "ahmedabad", cuisine: "vegetarian", priceRange: "moderate", successScore: 88, area: "residential", populationDensity: "medium" },
    { name: "Jain Food Court", city: "mumbai", cuisine: "jain", priceRange: "moderate", successScore: 82, area: "residential", populationDensity: "high" },
    { name: "Vegan Cafe", city: "bangalore", cuisine: "vegan", priceRange: "premium", successScore: 76, area: "tech-park", populationDensity: "high" },
    { name: "Tea & Coffee House", city: "delhi", cuisine: "chai-stall", priceRange: "budget", successScore: 85, area: "high-street", populationDensity: "very-high" },
    { name: "Sweet Shop", city: "jaipur", cuisine: "sweet-shop", priceRange: "economy", successScore: 86, area: "residential", populationDensity: "medium" },
    { name: "Ice Cream Parlour", city: "mumbai", cuisine: "ice-cream", priceRange: "moderate", successScore: 84, area: "mall", populationDensity: "very-high" },
    { name: "Quick Bites", city: "bangalore", cuisine: "qsr", priceRange: "economy", successScore: 90, area: "tech-park", populationDensity: "high" },
    { name: "Mughlai Delight", city: "lucknow", cuisine: "mughlai", priceRange: "moderate", successScore: 80, area: "tourist", populationDensity: "high" },
    { name: "Kashmiri Wazwan", city: "delhi", cuisine: "kashmiri", priceRange: "premium", successScore: 74, area: "cbd", populationDensity: "very-high" },
    { name: "Konkan Fish Curry", city: "mumbai", cuisine: "konkan", priceRange: "moderate", successScore: 83, area: "residential", populationDensity: "high" },
    { name: "Himachali Dham", city: "delhi", cuisine: "himachali", priceRange: "moderate", successScore: 77, area: "residential", populationDensity: "high" },
    { name: "Assamese Thali", city: "delhi", cuisine: "assamese", priceRange: "moderate", successScore: 75, area: "residential", populationDensity: "high" },
    { name: "Odiya Cuisine", city: "bhubaneswar", cuisine: "odiya", priceRange: "moderate", successScore: 82, area: "residential", populationDensity: "medium" },
    { name: "Sindhi Curry", city: "pune", cuisine: "sindhi", priceRange: "moderate", successScore: 81, area: "residential", populationDensity: "high" },
    { name: "Parsi Dining", city: "mumbai", cuisine: "parsian", priceRange: "premium", successScore: 78, area: "cbd", populationDensity: "very-high" },
    { name: "Filter Coffee Cafe", city: "chennai", cuisine: "chennai-filter", priceRange: "economy", successScore: 89, area: "high-street", populationDensity: "very-high" },
    { name: "Bangalore Darshini", city: "bangalore", cuisine: "bangalore-darshini", priceRange: "budget", successScore: 92, area: "residential", populationDensity: "high" },
    { name: "Hyderabad Irani Cafe", city: "hyderabad", cuisine: "hyderabad-irani", priceRange: "economy", successScore: 86, area: "cbd", populationDensity: "very-high" },
    { name: "Seafood Special", city: "kochi", cuisine: "seafood", priceRange: "premium", successScore: 80, area: "tourist", populationDensity: "high" },
    { name: "Kebab Grill", city: "delhi", cuisine: "kebabs", priceRange: "moderate", successScore: 88, area: "high-street", populationDensity: "very-high" },
    { name: "Juice Bar", city: "mumbai", cuisine: "juice-bar", priceRange: "economy", successScore: 87, area: "high-street", populationDensity: "very-high" },
    { name: "Food Court", city: "bangalore", cuisine: "food-court", priceRange: "economy", successScore: 91, area: "mall", populationDensity: "high" },
    { name: "Continental Cafe", city: "mumbai", cuisine: "continental", priceRange: "premium", successScore: 77, area: "cbd", populationDensity: "very-high" },
    { name: "Italian-Indian Fusion", city: "delhi", cuisine: "italian-indian", priceRange: "premium", successScore: 76, area: "cbd", populationDensity: "very-high" },
    { name: "Mexican-Indian Fusion", city: "bangalore", cuisine: "mexican-indian", priceRange: "premium", successScore: 74, area: "tech-park", populationDensity: "high" },
    { name: "Sattvic Kitchen", city: "rishikesh", cuisine: "sattvic", priceRange: "moderate", successScore: 83, area: "tourist", populationDensity: "medium" },
    { name: "Gluten-Free Cafe", city: "mumbai", cuisine: "gluten-free", priceRange: "premium", successScore: 73, area: "cbd", populationDensity: "very-high" },
    { name: "Hookah Lounge", city: "delhi", cuisine: "hookah-lounge", priceRange: "premium", successScore: 71, area: "high-street", populationDensity: "very-high" },
    { name: "Bakery & Cafe", city: "bangalore", cuisine: "cafe", priceRange: "moderate", successScore: 86, area: "residential", populationDensity: "high" },
    { name: "Fast Food Joint", city: "mumbai", cuisine: "fast-food", priceRange: "budget", successScore: 89, area: "high-street", populationDensity: "very-high" },
    { name: "Royal Nawabi", city: "lucknow", cuisine: "royal-cuisine", priceRange: "luxury", successScore: 70, area: "cbd", populationDensity: "high" },
    { name: "Bihari Kitchen", city: "delhi", cuisine: "bihari", priceRange: "economy", successScore: 84, area: "residential", populationDensity: "very-high" },
    { name: "Nepali Food", city: "delhi", cuisine: "nepali", priceRange: "economy", successScore: 82, area: "residential", populationDensity: "high" },
    { name: "Kerala Syrian", city: "kochi", cuisine: "kerala-syrian", priceRange: "moderate", successScore: 81, area: "residential", populationDensity: "high" },
    { name: "Karnataka Special", city: "bangalore", cuisine: "karnataka", priceRange: "moderate", successScore: 85, area: "residential", populationDensity: "high" },
    { name: "Tamil Nadu Special", city: "chennai", cuisine: "tamil-nadu", priceRange: "moderate", successScore: 86, area: "residential", populationDensity: "very-high" },
    { name: "Haryanvi Cuisine", city: "gurgaon", cuisine: "haryanvi", priceRange: "economy", successScore: 83, area: "residential", populationDensity: "high" },
    { name: "Uttar Pradesh Special", city: "lucknow", cuisine: "uttar-pradesh", priceRange: "moderate", successScore: 84, area: "residential", populationDensity: "high" },
    { name: "North Indian General", city: "delhi", cuisine: "north-indian-general", priceRange: "moderate", successScore: 90, area: "high-street", populationDensity: "very-high" },
    { name: "South Indian General", city: "chennai", cuisine: "south-indian-general", priceRange: "economy", successScore: 92, area: "high-street", populationDensity: "very-high" },
    { name: "West Indian Mix", city: "mumbai", cuisine: "maharashtrian", priceRange: "moderate", successScore: 88, area: "high-street", populationDensity: "very-high" },
    { name: "East Indian Mix", city: "kolkata", cuisine: "bengali", priceRange: "moderate", successScore: 87, area: "high-street", populationDensity: "very-high" },
    { name: "Fusion Kitchen", city: "bangalore", cuisine: "fusion", priceRange: "premium", successScore: 78, area: "tech-park", populationDensity: "high" },
    { name: "International Cuisine", city: "mumbai", cuisine: "fine-dining-international", priceRange: "luxury", successScore: 68, area: "cbd", populationDensity: "very-high" },
    { name: "Budget Thali", city: "ahmedabad", cuisine: "gujarati", priceRange: "budget", successScore: 89, area: "residential", populationDensity: "medium" },
    { name: "Premium Biryani", city: "hyderabad", cuisine: "biryani", priceRange: "premium", successScore: 85, area: "cbd", populationDensity: "very-high" },
    { name: "Luxury Dining", city: "mumbai", cuisine: "fine-dining-indian", priceRange: "luxury", successScore: 70, area: "cbd", populationDensity: "very-high" },
    { name: "Casual Dining", city: "bangalore", cuisine: "modern-indian", priceRange: "moderate", successScore: 88, area: "tech-park", populationDensity: "high" },
    { name: "Quick Service", city: "delhi", cuisine: "qsr", priceRange: "budget", successScore: 91, area: "high-street", populationDensity: "very-high" },
    { name: "Family Restaurant", city: "pune", cuisine: "punjabi", priceRange: "moderate", successScore: 87, area: "residential", populationDensity: "high" },
    { name: "Tourist Special", city: "goa", cuisine: "goan", priceRange: "moderate", successScore: 82, area: "tourist", populationDensity: "medium" },
    { name: "College Hangout", city: "delhi", cuisine: "indo-chinese", priceRange: "budget", successScore: 89, area: "university", populationDensity: "very-high" },
    { name: "Office Canteen", city: "mumbai", cuisine: "north-indian-general", priceRange: "economy", successScore: 86, area: "cbd", populationDensity: "very-high" },
    { name: "Mall Food Court", city: "bangalore", cuisine: "food-court", priceRange: "economy", successScore: 90, area: "mall", populationDensity: "high" },
    { name: "Late Night Cafe", city: "mumbai", cuisine: "cafe", priceRange: "moderate", successScore: 84, area: "high-street", populationDensity: "very-high" },
    { name: "Breakfast Special", city: "chennai", cuisine: "south-indian-general", priceRange: "budget", successScore: 93, area: "high-street", populationDensity: "very-high" },
    { name: "Dinner Only", city: "delhi", cuisine: "fine-dining-indian", priceRange: "premium", successScore: 75, area: "cbd", populationDensity: "very-high" },
    { name: "24/7 Restaurant", city: "mumbai", cuisine: "north-indian-general", priceRange: "moderate", successScore: 85, area: "cbd", populationDensity: "very-high" },
    { name: "Weekend Brunch", city: "bangalore", cuisine: "continental", priceRange: "premium", successScore: 79, area: "residential", populationDensity: "high" },
    { name: "Home Delivery Hub", city: "hyderabad", cuisine: "biryani", priceRange: "economy", successScore: 94, area: "residential", populationDensity: "high" },
    { name: "Cloud Kitchen", city: "delhi", cuisine: "indo-chinese", priceRange: "budget", successScore: 88, area: "residential", populationDensity: "high" },
    { name: "Franchise Outlet", city: "mumbai", cuisine: "fast-food", priceRange: "economy", successScore: 92, area: "mall", populationDensity: "very-high" },
    { name: "Local Favorite", city: "pune", cuisine: "maharashtrian", priceRange: "budget", successScore: 91, area: "residential", populationDensity: "high" },
    { name: "Heritage Restaurant", city: "jaipur", cuisine: "rajasthani", priceRange: "premium", successScore: 83, area: "tourist", populationDensity: "medium" },
    { name: "Modern Twist", city: "bangalore", cuisine: "modern-indian", priceRange: "premium", successScore: 80, area: "tech-park", populationDensity: "high" },
    { name: "Health Food", city: "mumbai", cuisine: "vegan", priceRange: "premium", successScore: 77, area: "cbd", populationDensity: "very-high" },
    { name: "Organic Kitchen", city: "bangalore", cuisine: "vegetarian", priceRange: "premium", successScore: 78, area: "residential", populationDensity: "high" },
    { name: "Regional Special", city: "kolkata", cuisine: "bengali", priceRange: "moderate", successScore: 86, area: "residential", populationDensity: "very-high" },
    { name: "Budget Eats", city: "delhi", cuisine: "street-food", priceRange: "budget", successScore: 95, area: "high-street", populationDensity: "very-high" },
    { name: "Premium Experience", city: "mumbai", cuisine: "fine-dining-indian", priceRange: "luxury", successScore: 69, area: "cbd", populationDensity: "very-high" },
    { name: "Value for Money", city: "hyderabad", cuisine: "biryani", priceRange: "economy", successScore: 96, area: "residential", populationDensity: "high" }
];

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    loadPredictions(samplePredictions);
    
    // Add enter key listener for search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Load predictions into grid
function loadPredictions(predictions) {
    const grid = document.getElementById('predictionsGrid');
    grid.innerHTML = '';
    
    predictions.forEach(prediction => {
        const card = createPredictionCard(prediction);
        grid.appendChild(card);
    });
    
    document.getElementById('resultsCount').textContent = predictions.length;
}

// Create prediction card element
function createPredictionCard(prediction) {
    const card = document.createElement('div');
    card.className = 'prediction-card';
    
    const successClass = prediction.successScore >= 80 ? 'high' : 
                        prediction.successScore >= 60 ? 'medium' : 'low';
    
    const cityNames = {
        'mumbai': 'Mumbai',
        'delhi': 'Delhi',
        'bangalore': 'Bangalore',
        'chennai': 'Chennai',
        'kolkata': 'Kolkata',
        'hyderabad': 'Hyderabad',
        'pune': 'Pune',
        'ahmedabad': 'Ahmedabad',
        'jaipur': 'Jaipur',
        'lucknow': 'Lucknow'
    };
    
    const cuisineNames = {
        'punjabi': 'Punjabi',
        'south-indian-general': 'South Indian',
        'biryani': 'Biryani',
        'kolkata-kathi': 'Kolkata Kathi',
        'gujarati': 'Gujarati',
        'maharashtrian': 'Maharashtrian',
        'chettinad': 'Chettinad',
        'awadhi': 'Awadhi',
        'goan': 'Goan',
        'rajasthani': 'Rajasthani',
        'indo-chinese': 'Indo-Chinese',
        'street-food': 'Street Food',
        'bengali': 'Bengali',
        'kerala': 'Kerala',
        'chaat': 'Chaat',
        'andhra': 'Andhra',
        'pav-bhaji': 'Pav Bhaji',
        'vada-pav': 'Vada Pav',
        'momos': 'Momos',
        'chhole-bhature': 'Chhole Bhature',
        'dosa-idli': 'Dosa & Idli',
        'rolls-kathi': 'Rolls & Kathi',
        'fine-dining-indian': 'Fine Dining Indian',
        'modern-indian': 'Modern Indian',
        'vegetarian': 'Pure Vegetarian',
        'jain': 'Jain Food',
        'vegan': 'Vegan',
        'chai-stall': 'Chai Stall',
        'sweet-shop': 'Sweet Shop',
        'ice-cream': 'Ice Cream',
        'qsr': 'Quick Service',
        'mughlai': 'Mughlai',
        'kashmiri': 'Kashmiri',
        'konkan': 'Konkan',
        'himachali': 'Himachali',
        'assamese': 'Assamese',
        'odiya': 'Odiya',
        'sindhi': 'Sindhi',
        'parsian': 'Parsi',
        'chennai-filter': 'Filter Coffee',
        'bangalore-darshini': 'Darshini',
        'hyderabad-irani': 'Irani Cafe',
        'seafood': 'Seafood',
        'kebabs': 'Kebabs',
        'juice-bar': 'Juice Bar',
        'food-court': 'Food Court',
        'continental': 'Continental',
        'italian-indian': 'Italian-Indian',
        'mexican-indian': 'Mexican-Indian',
        'sattvic': 'Sattvic',
        'gluten-free': 'Gluten-Free',
        'hookah-lounge': 'Hookah Lounge',
        'cafe': 'Cafe',
        'fast-food': 'Fast Food',
        'royal-cuisine': 'Royal Nawabi',
        'bihari': 'Bihari',
        'nepali': 'Nepali',
        'kerala-syrian': 'Kerala Syrian',
        'karnataka': 'Karnataka',
        'tamil-nadu': 'Tamil Nadu',
        'haryanvi': 'Haryanvi',
        'uttar-pradesh': 'Uttar Pradesh',
        'north-indian-general': 'North Indian',
        'fusion': 'Fusion',
        'fine-dining-international': 'Fine Dining International'
    };
    
    const priceSymbols = {
        'budget': '₹100-300',
        'economy': '₹300-500',
        'moderate': '₹500-1000',
        'premium': '₹1000-2000',
        'luxury': '₹2000+'
    };
    
    card.innerHTML = `
        <div class="prediction-header">
            <div>
                <div class="prediction-name">${prediction.name}</div>
                <div class="prediction-city">${cityNames[prediction.city] || prediction.city}</div>
            </div>
            <span class="success-badge ${successClass}">${prediction.successScore}%</span>
        </div>
        <div class="prediction-details">
            <div class="detail-item">
                <span class="detail-label">Cuisine</span>
                <span class="detail-value">${cuisineNames[prediction.cuisine] || prediction.cuisine}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Price</span>
                <span class="detail-value">${priceSymbols[prediction.priceRange] || prediction.priceRange}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Area</span>
                <span class="detail-value">${prediction.area}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Population</span>
                <span class="detail-value">${prediction.populationDensity}</span>
            </div>
        </div>
        <div class="prediction-score">
            <div class="score-bar">
                <div class="score-fill ${successClass}" style="width: ${prediction.successScore}%"></div>
            </div>
            <div class="score-text">Success Probability</div>
        </div>
    `;
    
    return card;
}

// Perform search
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredPredictions = samplePredictions.filter(prediction => 
        prediction.name.toLowerCase().includes(searchTerm) ||
        prediction.city.toLowerCase().includes(searchTerm) ||
        prediction.cuisine.toLowerCase().includes(searchTerm)
    );
    
    loadPredictions(filteredPredictions);
}

// Apply filters
function applyFilters() {
    const cuisineFilter = document.getElementById('filterCuisine').value;
    const cityFilter = document.getElementById('filterCity').value;
    const successFilter = document.getElementById('filterSuccess').value;
    
    let filteredPredictions = [...samplePredictions];
    
    if (cuisineFilter) {
        filteredPredictions = filteredPredictions.filter(p => p.cuisine === cuisineFilter);
    }
    
    if (cityFilter) {
        filteredPredictions = filteredPredictions.filter(p => p.city === cityFilter);
    }
    
    if (successFilter) {
        if (successFilter === 'high') {
            filteredPredictions = filteredPredictions.filter(p => p.successScore >= 80);
        } else if (successFilter === 'medium') {
            filteredPredictions = filteredPredictions.filter(p => p.successScore >= 60 && p.successScore < 80);
        } else if (successFilter === 'low') {
            filteredPredictions = filteredPredictions.filter(p => p.successScore < 60);
        }
    }
    
    loadPredictions(filteredPredictions);
}

// Clear filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterCuisine').value = '';
    document.getElementById('filterCity').value = '';
    document.getElementById('filterSuccess').value = '';
    
    loadPredictions(samplePredictions);
}

// Form submission handler
document.getElementById('predictionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        city: document.getElementById('city').value,
        area: document.getElementById('area').value,
        populationDensity: document.getElementById('populationDensity').value,
        footTraffic: document.getElementById('footTraffic').value,
        competition: document.getElementById('competition').value,
        accessibility: document.getElementById('accessibility').value,
        cuisine: document.getElementById('cuisine').value,
        priceRange: document.getElementById('priceRange').value,
        seatingCapacity: parseInt(document.getElementById('seatingCapacity').value),
        uniqueDishes: document.getElementById('uniqueDishes').value,
        spendingPower: document.getElementById('spendingPower').value,
        rentRevenue: document.getElementById('rentRevenue').value,
        deliveryDemand: document.getElementById('deliveryDemand').value,
        timeDemand: document.getElementById('timeDemand').value,
        cuisineMarketFit: document.getElementById('cuisineMarketFit').value,
        safetyInfrastructure: document.getElementById('safetyInfrastructure').value,
        investment: document.getElementById('investment').value,
        targetDemographic: document.getElementById('targetDemographic').value
    };
    
    // Calculate prediction scores
    const prediction = calculatePrediction(formData);
    
    // Display results
    displayResults(prediction);
});

// Calculate prediction based on form data (India-specific)
function calculatePrediction(data) {
    let locationScore = 0;
    let menuScore = 0;
    let marketScore = 0;
    let investmentScore = 0;
    let competitionScore = 0;
    let footTrafficScore = 0;
    
    // Location Score Calculation
    const areaScores = {
        'cbd': 90,
        'high-street': 85,
        'residential': 75,
        'mixed-use': 80,
        'mall': 88,
        'tech-park': 82,
        'university': 78,
        'tourist': 85,
        'industrial': 65,
        'suburban': 70
    };
    
    const populationDensityScores = {
        'very-high': 95,
        'high': 85,
        'medium': 70,
        'low': 55
    };
    
    const accessibilityScores = {
        'excellent': 90,
        'good': 80,
        'moderate': 65,
        'limited': 50
    };
    
    locationScore = (
        areaScores[data.area] * 0.4 +
        populationDensityScores[data.populationDensity] * 0.35 +
        accessibilityScores[data.accessibility] * 0.25
    );
    
    // Competition Score Calculation
    const competitionScores = {
        'low': 90,
        'medium': 70,
        'high': 50,
        'saturated': 35
    };
    
    competitionScore = competitionScores[data.competition];
    
    // Foot Traffic Score Calculation
    const footTrafficScores = {
        'very-high': 95,
        'high': 85,
        'medium': 70,
        'low': 50
    };
    
    footTrafficScore = footTrafficScores[data.footTraffic];
    
    // Menu Score Calculation (India-specific cuisine preferences)
    const cuisineScores = {
        // North Indian
        'punjabi': 88,
        'kashmiri': 72,
        'awadhi': 80,
        'rajasthani': 78,
        'mughlai': 82,
        'north-indian-general': 85,
        'haryanvi': 75,
        'himachali': 70,
        'uttar-pradesh': 80,
        // South Indian
        'south-indian-general': 90,
        'kerala': 82,
        'andhra': 85,
        'chettinad': 78,
        'hyderabadi': 88,
        'tamil-nadu': 85,
        'karnataka': 83,
        'kerala-syrian': 75,
        // West Indian
        'gujarati': 85,
        'maharashtrian': 87,
        'goan': 78,
        'konkan': 76,
        'sindhi': 74,
        'parsian': 72,
        // East Indian
        'bengali': 84,
        'odiya': 76,
        'assamese': 74,
        'bihari': 80,
        'nepali': 72,
        // Street Food & Chaat
        'chaat': 92,
        'street-food': 94,
        'panipuri': 90,
        'pav-bhaji': 91,
        'vada-pav': 89,
        'dosa-idli': 93,
        'momos': 88,
        'rolls-kathi': 87,
        'chhole-bhature': 90,
        // Fusion & Modern
        'indo-chinese': 90,
        'modern-indian': 78,
        'fusion': 75,
        'continental': 72,
        'italian-indian': 74,
        'mexican-indian': 70,
        // Specialty
        'biryani': 95,
        'kebabs': 88,
        'seafood': 80,
        'vegetarian': 85,
        'vegan': 75,
        'jain': 82,
        'sattvic': 73,
        'gluten-free': 70,
        // Quick Service
        'cafe': 83,
        'fast-food': 88,
        'food-court': 90,
        'qsr': 89,
        'chai-stall': 86,
        // Fine Dining
        'fine-dining-indian': 70,
        'fine-dining-international': 68,
        'royal-cuisine': 72,
        // Beverages & Desserts
        'juice-bar': 84,
        'ice-cream': 82,
        'sweet-shop': 85,
        'hookah-lounge': 68
    };
    
    const priceScores = {
        'budget': 90,
        'economy': 88,
        'moderate': 82,
        'premium': 70,
        'luxury': 60
    };
    
    // Seating capacity bonus (optimal range: 30-60 for Indian market)
    let seatingScore = 70;
    if (data.seatingCapacity >= 30 && data.seatingCapacity <= 60) {
        seatingScore = 90;
    } else if (data.seatingCapacity > 60) {
        seatingScore = 75;
    }
    
    menuScore = (
        (cuisineScores[data.cuisine] || 75) * 0.4 +
        priceScores[data.priceRange] * 0.35 +
        seatingScore * 0.25
    );
    
    // Market Score Calculation
    const spendingPowerScores = {
        'high': 90,
        'medium-high': 82,
        'medium': 75,
        'medium-low': 65,
        'low': 55
    };
    
    const rentRevenueScores = {
        'excellent': 90,
        'good': 80,
        'moderate': 70,
        'high': 55,
        'very-high': 40
    };
    
    const deliveryDemandScores = {
        'very-high': 95,
        'high': 88,
        'medium': 75,
        'low': 60
    };
    
    const cuisineFitScores = {
        'excellent': 90,
        'good': 80,
        'moderate': 70,
        'niche': 60,
        'experimental': 50
    };
    
    const safetyScores = {
        'excellent': 90,
        'good': 80,
        'moderate': 70,
        'basic': 60
    };
    
    marketScore = (
        spendingPowerScores[data.spendingPower] * 0.25 +
        rentRevenueScores[data.rentRevenue] * 0.2 +
        deliveryDemandScores[data.deliveryDemand] * 0.15 +
        cuisineFitScores[data.cuisineMarketFit] * 0.2 +
        safetyScores[data.safetyInfrastructure] * 0.2
    );
    
    // Investment Viability Calculation (INR)
    const investmentScores = {
        'low': 90,
        'medium': 85,
        'high': 75,
        'premium': 65,
        'luxury': 55
    };
    
    // Adjust based on location
    let investmentAdjustment = 0;
    if (data.investment === 'luxury' && data.area === 'cbd') {
        investmentAdjustment = 10;
    } else if (data.investment === 'low' && data.area === 'cbd') {
        investmentAdjustment = -15;
    }
    
    investmentScore = Math.min(100, Math.max(0, investmentScores[data.investment] + investmentAdjustment));
    
    // Calculate overall success score (weighted for Indian market)
    const overallScore = Math.round(
        locationScore * 0.2 +
        menuScore * 0.2 +
        marketScore * 0.25 +
        investmentScore * 0.1 +
        competitionScore * 0.1 +
        footTrafficScore * 0.15
    );
    
    // Generate recommendations
    const recommendations = generateRecommendations(data, {
        locationScore,
        menuScore,
        marketScore,
        investmentScore,
        competitionScore,
        footTrafficScore,
        overallScore
    });
    
    return {
        locationScore: Math.round(locationScore),
        menuScore: Math.round(menuScore),
        marketScore: Math.round(marketScore),
        investmentScore: Math.round(investmentScore),
        competitionScore: Math.round(competitionScore),
        footTrafficScore: Math.round(footTrafficScore),
        overallScore,
        recommendations
    };
}

// Generate personalized recommendations (India-specific)
function generateRecommendations(data, scores) {
    const recommendations = [];
    
    // Location-based recommendations
    if (scores.locationScore < 70) {
        if (data.accessibility === 'limited') {
            recommendations.push('Consider locations with better metro connectivity or parking availability');
        }
        if (data.populationDensity === 'low') {
            recommendations.push('Focus on delivery and takeout to compensate for low foot traffic');
        }
        recommendations.push('Explore emerging areas with developing infrastructure for better long-term value');
    } else {
        recommendations.push('Your location choice shows strong potential in the Indian market');
    }
    
    // Competition-based recommendations
    if (scores.competitionScore < 60) {
        recommendations.push('Differentiate your concept with unique regional specialties or fusion dishes');
        recommendations.push('Focus on exceptional service and ambiance to stand out from competitors');
    }
    
    // Menu-based recommendations
    if (scores.menuScore < 70) {
        if (data.priceRange === 'luxury') {
            recommendations.push('Consider adding more affordable thali options to attract diverse customers');
        }
        if (data.seatingCapacity > 60) {
            recommendations.push('Optimize seating layout for faster turnover during peak Indian dining hours');
        }
        recommendations.push('Leverage your unique selling point in all marketing and social media');
    } else {
        recommendations.push('Your menu concept aligns well with Indian dining preferences');
    }
    
    // Market-based recommendations
    if (scores.marketScore < 70) {
        if (data.spendingPower === 'low') {
            recommendations.push('Focus on value-for-money thalis and combo deals');
        }
        if (data.rentRevenue === 'very-high') {
            recommendations.push('Negotiate better rent terms or consider smaller footprint with higher turnover');
        }
        recommendations.push('Research local taste preferences and regional specialties in your area');
    } else {
        recommendations.push('Strong market fit detected for your concept');
    }
    
    // Delivery-specific recommendations
    if (data.deliveryDemand === 'high' || data.deliveryDemand === 'very-high') {
        recommendations.push('Partner with Swiggy, Zomato, and other local delivery platforms');
        recommendations.push('Optimize menu for delivery with packaging that maintains food quality');
    }
    
    // Investment-based recommendations
    if (scores.investmentScore < 70) {
        recommendations.push('Consider starting with a smaller pilot or cloud kitchen concept');
        recommendations.push('Explore cost-effective equipment sourcing and local suppliers');
    }
    
    // Time-based recommendations
    if (data.timeDemand === 'breakfast') {
        recommendations.push('Focus on South Indian breakfast items, parathas, and chai service');
    } else if (data.timeDemand === 'late-night') {
        recommendations.push('Ensure proper licensing for late-night operations and security arrangements');
    }
    
    // Overall recommendations
    if (scores.overallScore >= 80) {
        recommendations.push('🎉 Excellent potential! Your restaurant concept has strong indicators of success in the Indian market');
    } else if (scores.overallScore >= 60) {
        recommendations.push('👍 Good potential with some areas for optimization as noted above');
    } else {
        recommendations.push('⚠️ Consider refining your concept based on the recommendations above for better success probability');
    }
    
    return recommendations.slice(0, 8); // Limit to 8 recommendations
}

// Display results with animation
function displayResults(prediction) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('hidden');
    
    // Animate score
    const scoreValue = document.getElementById('scoreValue');
    let currentScore = 0;
    const targetScore = prediction.overallScore;
    
    const scoreInterval = setInterval(() => {
        if (currentScore >= targetScore) {
            clearInterval(scoreInterval);
        } else {
            currentScore++;
            scoreValue.textContent = currentScore;
        }
    }, 30);
    
    // Update score label based on value
    const scoreLabel = document.getElementById('scoreLabel');
    if (targetScore >= 80) {
        scoreLabel.textContent = 'High Success Probability';
        scoreLabel.style.color = '#10b981';
    } else if (targetScore >= 60) {
        scoreLabel.textContent = 'Moderate Success Probability';
        scoreLabel.style.color = '#f59e0b';
    } else {
        scoreLabel.textContent = 'Low Success Probability';
        scoreLabel.style.color = '#ef4444';
    }
    
    // Animate factor bars
    setTimeout(() => {
        document.getElementById('locationBar').style.width = prediction.locationScore + '%';
        document.getElementById('locationScore').textContent = prediction.locationScore + '%';
        
        document.getElementById('menuBar').style.width = prediction.menuScore + '%';
        document.getElementById('menuScore').textContent = prediction.menuScore + '%';
        
        document.getElementById('marketBar').style.width = prediction.marketScore + '%';
        document.getElementById('marketScore').textContent = prediction.marketScore + '%';
        
        document.getElementById('investmentBar').style.width = prediction.investmentScore + '%';
        document.getElementById('investmentScore').textContent = prediction.investmentScore + '%';
        
        document.getElementById('competitionBar').style.width = prediction.competitionScore + '%';
        document.getElementById('competitionScore').textContent = prediction.competitionScore + '%';
        
        document.getElementById('footTrafficBar').style.width = prediction.footTrafficScore + '%';
        document.getElementById('footTrafficScore').textContent = prediction.footTrafficScore + '%';
    }, 500);
    
    // Populate recommendations
    const recommendationList = document.getElementById('recommendationList');
    recommendationList.innerHTML = '';
    prediction.recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationList.appendChild(li);
    });
    
    // Scroll to results
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Close results
function closeResults() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.add('hidden');
    
    // Reset form
    document.getElementById('predictionForm').reset();
    
    // Reset bars
    document.getElementById('locationBar').style.width = '0%';
    document.getElementById('menuBar').style.width = '0%';
    document.getElementById('marketBar').style.width = '0%';
    document.getElementById('investmentBar').style.width = '0%';
    document.getElementById('competitionBar').style.width = '0%';
    document.getElementById('footTrafficBar').style.width = '0%';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(99, 102, 241, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});