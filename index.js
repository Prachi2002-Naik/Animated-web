document.addEventListener("DOMContentLoaded", () => {
  // Select all elements you want to animate
  const animatedElements = document.querySelectorAll(".anim");

  // Observer options
  const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger when 20% of the element is visible
  };

  // Callback function for the observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Element is in view");
        entry.target.classList.add("moveup"); // Add animation class when visible
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  // Create the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each animated element
  animatedElements.forEach((element) => observer.observe(element));
});
