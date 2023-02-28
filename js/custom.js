// JavaScript Document
// const b_url = "http://localhost/degournay-new/";
// const b_url = "https://cloud.mygwambo.com/";
// const b_url = "https://degournay.com/";

function add_to_fav(o, n, e) {
    $.ajax({
        url: b_url + "Home/add_favourite",
        type: "GET",
        data: {
            product_id: o,
            ref_number: n,
            product_type_id: e
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : 2 == o ? window.location.reload() : console.log("Something went wrong while adding product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

function remove_prod_frm_fav(o) {
    $.ajax({
        url: b_url + "Home/remove_product_favourite",
        type: "GET",
        data: {
            product_id: o
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : console.log("Something went wrong while adding product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

function colourway_add_to_fav(o, n, e) {
    $.ajax({
        url: b_url + "Home/add_favourite_colourway",
        type: "GET",
        data: {
            colourway_id: o,
            ref_number: n,
            product_type_id: e
        }
    }).done(function(o) {
        1 == o || 2 == o || console.log("Something went wrong while adding product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

function addtocart(o, n, e) {
    $.ajax({
        url: b_url + "Shop/add_to_cart",
        type: "POST",
        data: {
            cat_id: o,
            ref_number: e,
            prod_id: n
        }
    }).done(function(o) {
        1 == o ? swal("Added to Cart", "Product has been successfully added to your cart", {
            icon: "success"
        }) : 2 == o ? swal("Already added", "Product has been already added to your cart", {
            icon: "info"
        }) : console.log("Something went wrong while adding product to cart")
    }).fail(function() {
        console.log("error")
    })
}

function add_banner_to_fav(o, n) {
    $.ajax({
        url: b_url + "Home/add_banner_to_favroutelist",
        type: "POST",
        data: {
            colourway_id: o,
            product_type_id: n
        }
    }).done(function(o) {
        window.location.reload()
    }).fail(function() {
        console.log("error while adding banner to favourite")
    })
}

function remove_banner_to_fav(o, n) {
    $.ajax({
        url: b_url + "Home/remove_banner_to_favroutelist",
        type: "POST",
        data: {
            colourway_id: o,
            product_type_id: n
        }
    }).done(function(o) {
        window.location.reload()
    }).fail(function() {
        console.log("error while removing banner to favourite")
    })
}

function add_silk_to_fav(o, n, e) {
    $.ajax({
        url: b_url + "Home/add_silk_favourite",
        type: "GET",
        data: {
            product_id: o,
            ref_number: n,
            product_type_id: e
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : 2 == o ? window.location.reload() : console.log("Something went wrong while adding silk product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

function add_silk_colour_to_fav(o, n, e) {
    $.ajax({
        url: b_url + "Home/add_silk_colour_favourite",
        type: "GET",
        data: {
            product_id: o,
            ref_number: n,
            product_type_id: e
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : 2 == o ? window.location.reload() : console.log("Something went wrong while adding silk product to favourite")
    }).fail(function() {
        console.log("error")
    })
}
function remove_silk_colour_frm_fav(o) {
    $.ajax({
        url: b_url + "Home/remove_silk_colour_favourite",
        type: "GET",
        data: {
            product_id: o
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : console.log("Something went wrong while removing silk product to favourite")
    }).fail(function() {
        console.log("error")
    })
}
function remove_silk_prod_frm_fav(o) {
    $.ajax({
        url: b_url + "Home/remove_silk_product_favourite",
        type: "GET",
        data: {
            product_id: o
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : console.log("Something went wrong while removing silk product to favourite")
    }).fail(function() {
        console.log("error")
    })
}
function add_vases_lamp_to_fav(o, n, e) {
    $.ajax({
        url: b_url + "Home/add_vases_lampshades_to_favourite",
        type: "POST",
        data: {
            product_id: o,
            ref_number: n,
            product_type_id: e
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : 2 == o ? window.location.reload() : console.log("Something went wrong while adding silk product to favourite")
    }).fail(function() {
        console.log("error")
    })
}
function remove_vases_lamp_from_fav(o) {
    $.ajax({
        url: b_url + "Home/remove_vases_lamp_from_fav",
        type: "POST",
        data: {
            product_id: o
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : console.log("Something went wrong while removing silk product to favourite")
    }).fail(function() {
        console.log("error")
    })
}
function add_porcelain_banner_to_fav(o, n) {
    $.ajax({
        url: b_url + "Home/add_porcelain_banner_to_favroutelist",
        type: "POST",
        data: {
            colourway_id: o,
            product_type_id: n
        }
    }).done(function(o) {
        window.location.reload()
    }).fail(function() {
        console.log("error while adding banner to favourite")
    })
}

function remove_porcelain_banner_to_fav(o, n) {
    $.ajax({
        url: b_url + "Home/remove_porcelain_banner_to_favroutelist",
        type: "POST",
        data: {
            colourway_id: o,
            product_type_id: n
        }
    }).done(function(o) {
        window.location.reload()
    }).fail(function() {
        console.log("error while removing banner to favourite")
    })
}

function add_to_fav_shop(sc, spid, ref) {
    $.ajax({
        url: b_url + "Home/add_favourite_shop",
        type: "POST",
        data: {
            category: sc,
            product_id: spid,
            ref_number: ref
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : 2 == o ? window.location.reload() : console.log("Something went wrong while adding product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

function remove_from_fav_shop(spid) {
    $.ajax({
        url: b_url + "Home/remove_from_shop_fav",
        type: "POST",
        data: {
            product_id: spid,
        }
    }).done(function(o) {
        1 == o ? window.location.reload() : 2 == o ? window.location.reload() : console.log("Something went wrong while adding product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

function addto_to_fav_common(pid, colw_status,ref_number='') {
    $.ajax({
        url: b_url + "Home/add_favourite_common",
        type: "POST",
        data: {
            pid: pid,
            colw_status: colw_status,
            ref: ref_number
        }
    }).done(function(resp) {
        1 == resp ? window.location.reload() : 2 == resp ? swal("Already added", "Item has already been marked as favourite", {
            icon: "info"
        }) :swal("Something wromng", "Something went wrong while adding item to favourite", {
            icon: "info"
        }) 
    }).fail(function() {
        console.log("error")
    })
}

function remove_embroidered_from_fav(pid, colw_status) {
    $.ajax({
        url: b_url + "Home/remove_from_fav_common",
        type: "POST",
        data: {
            pid: pid,
            colw_status: colw_status,
        }
    }).done(function(resp) {
        1 == resp ? window.location.reload() : 2 == resp ? window.location.reload() : console.log("Something went wrong while adding product to favourite")
    }).fail(function() {
        console.log("error")
    })
}

