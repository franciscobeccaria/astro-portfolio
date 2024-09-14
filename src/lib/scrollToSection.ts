export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -60; // Adjust this value according to your fixed header height
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: yPosition,
        behavior: 'smooth',
      });
    }
  };