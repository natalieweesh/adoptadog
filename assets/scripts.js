let loading = false;
let DATA = {
  dogs: [
    {
      image: "/assets/images/raw/1.jpeg",
      source: "https://unsplash.com/photos/ybHtKz5He9Y"
    },

    {
      image: "/assets/images/raw/2.jpeg",
      source: "https://unsplash.com/photos/rY79kwEEyGo"
    },

    {
      image: "/assets/images/raw/3.jpeg",
      source: "https://unsplash.com/photos/ngqyo2AYYnE"
    },

    {
      image: "/assets/images/raw/4.jpeg",
      source: "https://unsplash.com/photos/9A64wd1QaAU"
    },

    {
      image: "/assets/images/raw/5.jpeg",
      source: "https://unsplash.com/photos/915UJQaxtrk"
    },

    {
      image: "/assets/images/raw/6.jpeg",
      source: "https://unsplash.com/photos/mx0DEnfYxic"
    },

    {
      image: "/assets/images/raw/7.jpeg",
      source: "https://unsplash.com/photos/OsOQhAzcEKc"
    },

    {
      image: "/assets/images/raw/8.jpeg",
      source: "https://unsplash.com/photos/6WneSv56YVI"
    },

    {
      image: "/assets/images/raw/9.jpeg",
      source: "https://unsplash.com/photos/CdVG9f96kyg"
    },

    {
      image: "/assets/images/raw/10.jpeg",
      source: "https://unsplash.com/photos/bVA2DI7c9e8"
    },

    {
      image: "/assets/images/raw/11.jpeg",
      source: "https://unsplash.com/photos/GvhSUEN-Lm8"
    },

    {
      image: "/assets/images/raw/12.jpeg",
      source: "https://unsplash.com/photos/t2XHKIdc4Kw"
    },

    {
      image: "/assets/images/raw/13.jpeg",
      source: "https://unsplash.com/photos/saRU3vzmgkY"
    },

    {
      image: "/assets/images/raw/14.jpeg",
      source: "https://unsplash.com/photos/1z-kI6gIEpg"
    },

    {
      image: "/assets/images/raw/15.jpeg",
      source: "https://unsplash.com/photos/zHZ2nTnBnAQ"
    }
  ]
};

function loadThumbnails(data) {
  data.dogs.map((dog, i) => {
    // create thumbnail image
    let dogBlock = document.createElement("div");
    let img = `url(.${dog.image})`;
    dogBlock.className = "dog";
    dogBlock.style.backgroundImage = img;
    // open modal with dog image
    dogBlock.onclick = () => {
      let modal = document.getElementById("modal");
      modal.className = "visible";
      modal.style.backgroundImage = img;
    };
    document.getElementById("gallery").append(dogBlock);
  });
}

function load() {
  // first load of dog data
  loadThumbnails(DATA);

  // infinite load if scroll to bottom
  document.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      if (!loading) {
        loading = true;
        document.getElementById("loading").className = "visible";
        loadMoreDogs().then(moreDogs => {
          loadThumbnails(moreDogs);
        });
      }
    }
  });
}

function loadMoreDogs() {
  // faking request to fetch more dog info
  var promise = new Promise(function(resolve, reject) {
    window.setTimeout(() => {
      loading = false;
      document.getElementById("loading").className = "";
      resolve(DATA);
    }, 2000);
  });
  return promise;
}
