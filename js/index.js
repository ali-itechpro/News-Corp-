const getColletionDetails = () => {  
    var collections, collectionDetails;
    fetch('data/collections.json')
	.then(response => {
        if(response.ok){
            return response.json();
        }
	}).then(async (data) => {
        collections = data;
        const details = await fetch('data/collectiondetails.json');
        //console.log(collections);
        return details;
	}).then(response => {
        if(response.ok){
            return response.json();
        }	
	}).then(data => {
        let itemList="";
        let mainItem="";
        let subItem="";
		collectionDetails = data;
        collections.forEach(items => {
            //console.log(items);
            collectionDetails.forEach(item => {
                if(items.collectionid==item.id){
                    console.log(item);

                    //main news
                    if(item.id == 1001 ){
                        mainItem += `<div class=""><img src="${item.Imageurl}" class="img-fluid img-main" alt="exclusive news"></div>
                        <h2 class="title"><span class="oi oi-plus text-danger icon-title"></span>${item.Title}</h2>
                        <div class="para">${item.Intro}</div>
                        <br><br>
                        <div class="read-time text-timer"><span class="oi oi-clock"> ${item.Time} &nbsp;</span> <span class="oi oi-comment-square"></span></div>`
                        document.getElementById("mainItem").innerHTML = mainItem;
                    }
                    //sub news
                    else if(item.id == 1002){
                        subItem += `<div class=""><img src="${item.Imageurl}" class="img-sub" alt="sports"></div>
                        <h2 class="title"><span class="oi oi-plus text-danger icon-title"></span>${item.Title}</h2>
                        <div>${item.Intro}</div>
                        <div class="text-timer"><span class="oi oi-clock"></span> ${item.Time}  &nbsp; <span class="oi oi-comment-square"></span>  1</div>
                        <hr class="mt-4 mb-4">`
                        document.getElementById("subItem").innerHTML = subItem;
                    }
                    
                    //list
                    else {
                      itemList += `<div class="row">
                    <div class="col-md-8  title-list pt-2 pb-2"><span class="oi oi-plus text-danger icon-list"> </span>${item.Title}</div>
                    <div class="col-md-4"><img src="${item.Imageurl}" alt="health" class="img-thumbnail img-list"></div>
                    <br/><br/>
                    <div class="text-timer"><span class="oi oi-clock"></span>  ${item.Time} </div>
                    <hr class="mt-2 mb-2">
                    </div> `;
                    }
                    document.getElementById("itemsList").innerHTML = itemList;
                }
            })
        })

        //console.log(collectionDetails);
	}).catch(function (error) {
        console.log(error);
	});
}

getColletionDetails();


