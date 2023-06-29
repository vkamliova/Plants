const service__button__gardens = document.querySelector(".button__gardens");
const service___button___gardens = document.querySelector(".button__lawn");
const service__button__planting = document.querySelector(".button__planting");
const img__gardens = document.querySelectorAll(".img__gardens");
const img__lawn = document.querySelectorAll(".img__lawn");
const img__planting = document.querySelectorAll(".img__planting");


service__button__gardens.addEventListener("click", () => {
    if ((service___button___gardens.classList.contains("active__img")) && (service__button__planting.classList.contains("active__img"))) { } else {
        if (service___button___gardens.classList.contains("active__img")) {
            img__planting.forEach(img => {
                img.classList.add("service__blur");
            });
        }
        if (service__button__planting.classList.contains("active__img")) {
            img__lawn.forEach(img => {
                img.classList.add("service__blur");
            });
        }

        if (service__button__gardens.classList.contains("active__img")) {
            service__button__gardens.classList.remove("active__img");
            if ((service___button___gardens.classList.contains("active__img")) || (service__button__planting.classList.contains("active__img"))) {
                img__gardens.forEach(img => {
                    img.classList.add("service__blur");
                });
            } else {
                img__lawn.forEach(img => {
                    img.classList.remove("service__blur");
                });

                img__planting.forEach(img => {
                    img.classList.remove("service__blur");
                });
            }
        } else {
            service__button__gardens.classList.add("active__img");
            if ((service___button___gardens.classList.contains("active__img")) || (service__button__planting.classList.contains("active__img"))) {
                img__gardens.forEach(img => {
                    img.classList.remove("service__blur");
                });
            } else {
                img__lawn.forEach(img => {
                    img.classList.add("service__blur");
                });

                img__planting.forEach(img => {
                    img.classList.add("service__blur");
                });
            }
        }
    }
});



service___button___gardens.addEventListener("click", () => {
    if ((service__button__gardens.classList.contains("active__img")) && (service__button__planting.classList.contains("active__img"))) { } else {
        if (service__button__gardens.classList.contains("active__img")) {
            img__planting.forEach(img => {
                img.classList.add("service__blur");
            });
        }
        if (service__button__planting.classList.contains("active__img")) {
            img__gardens.forEach(img => {
                img.classList.add("service__blur");
            });
        }

        if (service___button___gardens.classList.contains("active__img")) {
            service___button___gardens.classList.remove("active__img");
            if ((service__button__gardens.classList.contains("active__img")) || (service__button__planting.classList.contains("active__img"))) {
                img__lawn.forEach(img => {
                    img.classList.add("service__blur");
                });
            } else {
                img__gardens.forEach(img => {
                    img.classList.remove("service__blur");
                });

                img__planting.forEach(img => {
                    img.classList.remove("service__blur");
                });
            }
        } else {
            service___button___gardens.classList.add("active__img");
            if ((service__button__gardens.classList.contains("active__img")) || (service__button__planting.classList.contains("active__img"))) {
                img__lawn.forEach(img => {
                    img.classList.remove("service__blur");
                });
            } else {
                img__gardens.forEach(img => {
                    img.classList.add("service__blur");
                });

                img__planting.forEach(img => {
                    img.classList.add("service__blur");
                });
            }
        }
    }
});

service__button__planting.addEventListener("click", () => {
    if ((service___button___gardens.classList.contains("active__img")) && (service__button__gardens.classList.contains("active__img"))) { } else {
        if (service___button___gardens.classList.contains("active__img")) {
            img__gardens.forEach(img => {
                img.classList.add("service__blur");
            });
        }
        if (service__button__gardens.classList.contains("active__img")) {
            img__lawn.forEach(img => {
                img.classList.add("service__blur");
            });
        }

        if (service__button__planting.classList.contains("active__img")) {
            service__button__planting.classList.remove("active__img");
            if ((service___button___gardens.classList.contains("active__img")) || (service__button__gardens.classList.contains("active__img"))) {
                img__planting.forEach(img => {
                    img.classList.add("service__blur");
                });
            } else {
                img__lawn.forEach(img => {
                    img.classList.remove("service__blur");
                });

                img__gardens.forEach(img => {
                    img.classList.remove("service__blur");
                });
            }
        } else {
            service__button__planting.classList.add("active__img");
            if ((service___button___gardens.classList.contains("active__img")) || (service__button__gardens.classList.contains("active__img"))) {
                img__planting.forEach(img => {
                    img.classList.remove("service__blur");
                });
            } else {
                img__lawn.forEach(img => {
                    img.classList.add("service__blur");
                });

                img__gardens.forEach(img => {
                    img.classList.add("service__blur");
                });
            }
        }
    }
});