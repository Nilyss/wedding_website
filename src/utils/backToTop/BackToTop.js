class BackToTopComponent {
  constructor() {
    this.windowScrolled = false;
    this.topPositionToStartShowing = 100;
  }

  checkScroll() {
    const scrollPosition =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

    if (scrollPosition >= this.topPositionToStartShowing) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }

    const div2 = document.querySelector(".backToTopWrapper__backToTop");
    if (this.windowScrolled) {
      div2.classList.add("showBackToTop");
    } else {
      div2.classList.remove("showBackToTop");
    }
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  render() {
    const div1 = document.createElement("div");
    div1.className = "backToTopWrapper";

    const div2 = document.createElement("div");
    div2.title = "Haut de page";
    div2.className = "backToTopWrapper__backToTop material-symbols-outlined";
    div2.innerHTML = "assistant_navigation";
    div2.addEventListener("click", this.goToTop);

    if (this.windowScrolled) {
      div2.classList.add("showBackToTop");
    }

    div1.appendChild(div2);

    window.addEventListener("scroll", this.checkScroll.bind(this));

    // Retirer l'écouteur d'événements lorsque l'élément est supprimé du DOM
    const mutationObserver = new MutationObserver(() => {
      if (!document.body.contains(div1)) {
        window.removeEventListener("scroll", this.checkScroll.bind(this));
        mutationObserver.disconnect();
      }
    });
    mutationObserver.observe(document.documentElement, { childList: true });

    return div1;
  }
}

const backToTopComponent = new BackToTopComponent();
document.body.appendChild(backToTopComponent.render());
