const slides = [
      {
        title: "Starting ₹99",
        text: "Bestselling mobile accessories",
        sub: "Wide Selection | Top Brands",
        bg: "linear-gradient(to bottom,#79866f,#40453d)"
      },
      {
        title: "Up to 60% off",
        text: "Kitchen and home essentials",
        sub: "Great Savings | Best Deals",
        bg: "linear-gradient(to bottom,#6b7c8f,#303844)"
      },
      {
        title: "Latest trends",
        text: "Fashion, gadgets and more",
        sub: "New Arrivals | Top Picks",
        bg: "linear-gradient(to bottom,#8b7467,#3e312d)"
      }
    ];

    let currentSlide = 0;

    function showSlide(index){
      document.getElementById("heroTitle").innerText = slides[index].title;
      document.getElementById("heroText").innerText = slides[index].text;
      document.getElementById("heroSub").innerText = slides[index].sub;
      document.getElementById("hero").style.background = slides[index].bg;
    }

    function nextSlide(){
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function prevSlide(){
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }