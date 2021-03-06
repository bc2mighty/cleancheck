$(document).ready(function() {
    var categories = []
    categories['irononly'] = ['kidsCloth','menCloth','womenCloth']
    categories['washonly'] = ['menCloth','womenCloth'];
    categories['washandiron'] = ['kidsCloth','menCloth','womenCloth'];
    categories['otherservices'] = ['otherservices']
    
    var company_categories = []
    company_categories['Customer Care'] = ['FAQs','Privacy Policy']

    $("#category").change(function() {
        var category = $(this).val();
        var sub_categories = categories[category];
        $(".col-sm-12.col-md-12.col-lg-6.list-product").remove();

        let div = `
            <div class="col-sm-12 col-md-12 col-lg-6 list-product"">
                <div class="form-group"> 
                    <label for="first-name-column">Sub Category</label>
                    <select name="sub_category" id="" class="form-control">
                        <option value="">Select ${category}'s sub category</option>
        `;

        for(x of sub_categories) {
            div += `
                         <option value="${x}">${x}</option>
            `;
        }

        div += `
                    </select>
                </div>
            </div>
        `;

        console.log(div);
        $(div).insertAfter($('.category-class'));
    });

    $("#company_category").change(function() {
        var category = $(this).val();
        var sub_categories = company_categories[category];
        $(".col-sm-12.col-md-12.col-lg-6.list-product").remove();

        let div = `
            <div class="col-sm-12 col-md-12 col-lg-6 list-product"">
                <div class="form-group"> 
                    <label for="first-name-column">Sub Category</label>
                    <select name="sub_category" id="" class="form-control">
                        <option value="">Select ${category}'s sub category</option>
        `;

        for(x of sub_categories) {
            div += `
                         <option value="${x}">${x}</option>
            `;
        }

        div += `
                    </select>
                </div>
            </div>
        `;

        console.log(div);
        $(div).insertAfter($('.category-class'));
    });

    $(".btn-danger").click(function(e) {
        if(!confirm("Are you sure you want to delete this?")){
            e.preventDefault();
        }
    })
});