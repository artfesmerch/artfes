
const observerL = new IntersectionObserver((entries) =>{
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add("show");
		}else{
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElementsLeft = document.querySelectorAll(".hiddenL");
hiddenElementsLeft.forEach((el) => observerL.observe(el))

const observerR = new IntersectionObserver((entries) =>{
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add("show");
		}else{
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElementsRight = document.querySelectorAll(".hiddenR");
hiddenElementsRight.forEach((el) => observerR.observe(el))