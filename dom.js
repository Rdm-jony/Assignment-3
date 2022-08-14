document.getElementById("more-courses").addEventListener("click", function (event) {
    const target = document.getElementById("see-courses");
    const row = document.createElement("row");
    row.innerHTML = `
                   <div class="col">
                            <div class="card me-lg-2">
                                <div class="row d-flex align-items-center mb-lg-0 mb-4 rounded">
                                    <div class="col-sm-4">
                                        <img class="w-100 img-fluid" src="images/course/course-5.png" alt="">
                                    </div>
                                    <div class="col-sm-8 px-sm-4 py-sm-0 p-4">
                                        <h5 class="fw-bold">Photography Basic Rulesn</h5>
                                        <small class="text-muted d-block mb-2">Some quick example text to build on the card
                                            title
                                            and make up the bulk of the card</small>
                                        <p class="text-primary m-0">Price : 20$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col ms-lg-2">
                            <div class="card">
                                <div class="row d-flex align-items-center rounded">
                                    <div class="col-sm-4">
                                        <img class="w-100 img-fluid" src="images/course/course-6.png" alt="">
                                    </div>
                                    <div class="col-sm-8 px-sm-4 py-sm-0 p-4">
                                        <h5 class="fw-bold">Motion Graphics</h5>
                                        <small class="text-muted d-block mb-2">Some quick example text to build on the card
                                            title
                                            and make up the bulk of the card</small>
                                        <p class="text-primary m-0">Price : 20$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    `
    row.classList.add("row-cols-lg-2", "d-lg-flex", "mt-3", "row-cols-1");
    target.appendChild(row);
    const seeMoreBtn = document.getElementById("more-courses");
    console.log(seeMoreBtn.parentNode.removeChild(event.target))
})
document.getElementById("view-all-btn").addEventListener("click", function (event) {
    const target = document.getElementById("see-courses");
    const row = document.createElement("row");
    row.innerHTML = `
                   <div class="col my-4">
                            <div class="card me-lg-2">
                                <div class="row d-flex align-items-center mb-lg-0 mb-4 rounded">
                                    <div class="col-sm-4">
                                        <img class="w-100 img-fluid" src="images/course/course-5.png" alt="">
                                    </div>
                                    <div class="col-sm-8 px-sm-4 py-sm-0 p-4">
                                        <h5 class="fw-bold">Photography Basic Rulesn</h5>
                                        <small class="text-muted d-block mb-2">Some quick example text to build on the card
                                            title
                                            and make up the bulk of the card</small>
                                        <p class="text-primary m-0">Price : 20$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="row d-flex align-items-center rounded">
                                    <div class="col-sm-4">
                                        <img class="w-100 img-fluid" src="images/course/course-6.png" alt="">
                                    </div>
                                    <div class="col-sm-8 px-sm-4 py-sm-0 p-4">
                                        <h5 class="fw-bold">Motion Graphics</h5>
                                        <small class="text-muted d-block mb-2">Some quick example text to build on the card
                                            title
                                            and make up the bulk of the card</small>
                                        <p class="text-primary m-0">Price : 20$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    `
    row.classList.add("row-cols-1");
    target.appendChild(row);
    event.target.parentNode.removeChild(event.target);
})
document.getElementById("read-more-btn").addEventListener("click", function (event) {
    const readMoreText = document.getElementById("read-more-text");
    readMoreText.classList.remove("d-none");
    event.target.parentNode.removeChild(event.target);

})