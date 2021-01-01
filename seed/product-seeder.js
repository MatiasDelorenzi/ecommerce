var Product = require('../models/product');
const mongoose = require('mongoose');
const { URITooLong } = require('http-errors');

const URI = 'mongodb://localhost/shopping'

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => console.log('DB is Connected'))
    .catch(err => console.log(err));

/*


var products = [
    new Product({
    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/615Z6iWv-FL._AC_SX522_.jpg',
    title: 'Couch',
    description: 'Black couch',
    price: 400
}),
    new Product({
    imagePath: 'https://images.techhive.com/images/article/2016/05/samsung-family-hub-100659372-large.jpg',
    title: 'Smart fridge',
    description: 'Samsung smart fridge i do not know i do not care',
    price: 640
}),
    new Product({
    imagePath: 'https://memestatic.fjcdn.com/pictures/Fancy+table+trigger+medium+mentionlist+neato_95ea03_6436025.jpg',
    title: 'Fancy table',
    description: 'Overprized table, come on, it looks terrible...',
    price: 6000
}),
    new Product({
    imagePath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhASExMSEhUWEhgWGBUXFhUYFRUZFRoXGRoTFRUYHSkgGB0lGxUVITEjJSkrLi4uFx8zODMtNygtLisBCgoKDg0NDw0NDysZHxktLSsrLSsrKysrNys3Ky03NysrKys3KysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCAQj/xABJEAACAQICBgYFBwgIBwAAAAAAAQIDBAURBgcSITFRE0FhcYGRFCJSocEyYoKSscLRIzNCk6Ky4fAIJERTZHKDoxUWFyVjhPH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAAAAAAAAAAAAHKxPSG2oZqc05exH1pdzy4eORHrvT3qp0fGcvux/ECbArerpnePg6Ue6H4yZ4jpbe5/nF3bEfwAssFbf8AUepbyh6TCEqTkoyqRzjKmm8ttpvKSXWt27PjwdkJ571vA+gAAAAAAAAAAAAAAAAAAAAAAAAAAAfJSSTb3JdfIDxcV4wjKc2oxis23wSK60i0xqVW4UW6dPhnwnPx/RXYv4GppppK7ibpwbVKL3dW2/bfwRGlNsDZjJntTMEfEzQIrPBnuXAxRPlepks31b/IoimmlfbnSor9KSz7lvZf2iNRysbNvj6PT90Uj83xq9LcVar4R9Rd/Fs/S2jlLYtLSPK3prygiI6IAKAAAAAAAAAAAAAAAAAAAAAAAABDdYON9HD0eD3yWc2uqPVHx6+zvJdc1404TnJ5RhFyk+Sis2/JFI4/iEqtSdSXypSba5fNz5JZLwA59SpvMlNnPhPeb1LgRW1TZsxZrUjPmBmRytKL3oqMupvgdOJE9K6u3Wp0lvSeb8P5XmUaWGUNmCXXlm+ebP1DQp7MYx5RS8lkfnHB6W3WoQ9qrCPnJL4n6RJCgAKgAAAAAAAAAAAAAAAAAAAAAAACM6f3vR2yguNWaj9GOc5eD2VH6ZTWIVs2yw9Zd1nXhD+7o++rJ7SfhSh5lY3tTeBktZbzp0zk2K38Ts0+HMitikZEYodxlXADJtLJvkmQXb261WfL1V9r+6S7E6uzRm+z+fgRDDV6iftNy83u92QEl0No7V7Zr/zwl9VqX3T9BFF6taO1iFt83bk/CnPL3tF6CIAAoAAAAAAAAAAAAAAAAAAAAAAAAp/Tqrnd3efVUil3KlS+O15kEr5tk00/puN9dRf6ThUj/llTjHP69Op5ESqUSKy2NM6lKJp2kDp04dgHqC7z3kfVBI+pFHE0wrONBpcXuXe+H2HHpQySXJJG5pjUzlbw5zT+rvNaCIJ1qiobV5OWXyKEnn2uUF9jZcZWupu09W6q83CmvDOUv3ollFiAAAAAAAAAAAAAAAAAAAHirVjFZykorm2kvNkZxnSnJyhRyeW5zaz+quvvZFru4nUe1OUpvm3n/wDAJpe6XWlPhJ1Hygs/e8l7zhXmsPLNU6HjKX3UvicBwTMUqUeSA3a2sW76oUV9Gb+8YY6xr1foUX2OEvhI1Xbx5GGdrHkBoaXY5UvZ0KrpxpzpxlCeTeVSEmmlk+Di02nm/lM40Kye5rZfb8OZIJWiNedjF7nFPsA82tNdxuQj3M1FbKPBuPe/xMcrvY3upD+e4Dpy7Tyzi19JKENzkvcvia3/ADhQXCMpd2b+AGjpPPO7ox5KT92R7po4+NYvTqXVKpHNLg81llnu3k10MwR3lzTp5ZwXrVHyguKz7eHiSqtrV/h3QWNFNZSnnVl9Ph+yorwJGfEsty3H0qAAAAAAAAAAAAAAAABr4hSnOlVhCShOVOUYyazUZNNKTXXk8jYAFOyxF0p9DdU5W1VdU/zcu2nU4SRuLJ700/H7GY6lJYjpJXpVM529pa7Lptvo5SaW6UeD9as/1S5Hfv8AVhatuVtWr2j9mMnOn9WTz/aA4comKTMt3oNi9P8AN3FC4S4bScJeWWX7RxrzA8eX9mT7Yzpv7GwOhOokadxilOGbbivE5VbQ7HqubdOUF2Shn+8iJ4fhTuHNwjdXOxLKexRrTUXv3S2IbuD48gJPe6YUY55ST7jlV9Kq08+jpzffuXmzzHB+j/st3H/1K6fm4HirXpw+VC4j30Ki+1EGtUuLqpxlGC7M5P8AAxqwz+XOc/HJeSMk8ctI8XVXfBo8PSKz51PqfxAyUrSnHhBJ88t/mbUYmO0xiwnltV+j/wA1Oo35Qi/tJZgNLAqkl0uIS55dBVox+lVqRccvIKjCwidznShTlUm02lGLlLd1pIvPVro67KxowqR2a8oqVXNpvPflBtbvVTS3buPM6+BYXaUKa9GhTUJJPbi9pzXU3U3uS8TplQAAAAAAAAAAAAAAAAAAA8zkkm3uSWbfJI9EZ1lYn6Nhd9VTyfQunF9e1Vypxa8Zp+AEQ1GQdd4riMk87m7aWfUlnU3frkvo9hapD9UeG9BhNjHrnT6Z/wCs3NfsyivAmAAAACptSkYK8x3Y4OtTeXb0l2vgWyVFqAW08Wqe1cRXl0svvgW6aGP2HpFtc0P72hUp/Xi1n7zfAFfakLtVcKpwlvdGrVpPPe1nLpEt/wA2oiczsaMuNOm++EX8CutVP5C+x2ye5QuVWgvm1HNfuql5lmgc2to9ZT+Va20u+jTf2xOXd6v8IqRcXY20c1xhTjTku1Sp5NPuJMAKg0Yq1MFxf/hcqk52d0tu3c97pzlnks+G9xlFpcW4Pdmy3ysdfOETlaUb2lmqtnWjNSXFRk4ptd01Tl3Jk80bxeF5a29zDhVpRnl7La9aPhLNeAHSAAAAAAAAAAAAAAAAAAAq/X1cSnbWVlB5TuruMUuaju/fqUi0Cq9JP63pLhtDjC1oOtLsk9qWfmrfzAs+1oRpwhTisowiopclFZJeSMoAAAAeK8soyfKLfkipv6OMf6neS53S91OD+8WhjNTZt7iXKjN+UWyt/wCjpDLDa753kvdSor7cwLUAAFY5ejaU8leWPg5wS9+Vt+12lnFaa1I9BfYFercoXnQSfzazj91VfMssAAANXFLCFxRrUKizhVpypy7ppp/aVnqKv50o32F1n+UtK8nFfNlJqWyuSmnL/VRaxUGmP/bNILG/Xq0bxdDWfVn6sG5PqSXQz+hIC3wAAAAAAAAAAAAAAAAAAKv1bw9JxfHL571GqraD7IPZll4UaT+kWLjF6qFCvXlwpUp1H3Qi5fAhmpHDnSwunUl8u4q1K8m+Lzewn4xpxfiBPgAAAAHG0zq7GH4hP2bOu/KnNkQ1A0ssKT9q4qv92P3STaxZ5YXiT/wlVecGvicPUbDLB7Z851n/ALs18AJ8AAINrosHVwm4lH5VGUK0Xy2JJSa+hKZLsIvFXoUKy3qrShUXdOKl8Tzjdgri3uKD4VaM6b+nFx+JG9UV5KrhNltLKVOMqMly6GcoJP6MYgTEAACEa48A9Mwyvks6lD8vDn6ie2vGDnu55E3PkoppprNPc1z7AIzq2x707DrWu3nPY6Opz6Sn6sm+/JS7pIk5UuqpPD8SxTCJZqG109DPrjuXHrbpypfq5FtAAAAAAAAAAAAAAAAAQnXHeypYVcxhvnWcKEV7XSTSlFd8FMlGB4era2t7ePClRhTX0IqOfuIhrCj09/gVlvad1K5nyStYbS2uxuTRPQAAAAACLa0p5YTiL/w8l5tL4mpqbo7GDWC5xqS+vVqS+J91xz2cHv38yC86tNfE3tWtPZwrDl/hab+str4gSUAACE6uodDWxm0z/NYhKrFezC6hGpFd3yibERsrK7p4zdVlbpW1e2pRlW6SG+dHayfR/Kz9fZ4ZZRzz6gJcAAAAAqvW1Tdle4XjEVupVVQr5JtunLa37vmyrLvcS04yTSaeaazT6n2nG0zwNX1ldWryzqU3sN9U4+tCXhJROLqgxp3WGUFPPpaGdvUTz2lKlkltZ789hwz7cwJoAAAAAAAAAAAAAAACvsNvI3GkNxLZrJW9j0MdqnNQ2nVznPNrJZrZSfCS3rNFggAAAAAAED14Sywa87ZUV/vU38CSaHUOjsLCHs2lCPlTiiKa+J5YPXXOrSX7afwJ1htPZo0Y+zTgvKKQGyAAAAAAAAAABW+Ax9Ax68teFHEKXpVLl0sM+kgu1/lJPsUSyCB62rWcKNriNJZ1LC4jWeXGVGTUasO5rZb7EwJ4DHbV41IQnBqUZxUotcGpLNPyZkAAAAAAAAAAAAAAAAAAAAAAK518R2sNhD27yjDz2vwLFSK/1yLapYXD28Xto+6p/AsEAAAAAAAAAAABoY9hvpNtcW+26fS0pU9tKMslJZP1Zbmsnll29RvgDhaF4FVsbWnbVLiVzsboycFBRgklGnGKbeSS623vfVkl3QAAAAAAAAAAAAAAAAAAAAAACH6e6IXGIStJU7v0dUKqqqLpqf5SDzjUi9pb1m9zzXxl0E0km83lx59p6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==',
    title: 'Gaming chair',
    description: 'Gaming chair, full RGB leds, 120 fps',
    price: 20
}),
    new Product({
    imagePath: 'https://cdn11.bigcommerce.com/s-31djhj4ixx/images/stencil/1280x1280/products/1045/1979/Mocka-Austin-Chair-2__95589.1590705646.jpg?c=1',
    title: 'Interior pack',
    description: 'Interior pack: Table + chair + plant',
    price: 60
}), 

];

var done = 0

for (var i=0; i < products.length; i++){
    var product = products[i]
    console.log(product)
    product.save();
    done++;
    if (done === products.length){
        exit();
        console.log('exit')
    }
};

function exit(){
    mongoose.disconnect();
}

*/

product =  new Product({
    imagePath: 'https://cdn11.bigcommerce.com/s-31djhj4ixx/images/stencil/1280x1280/products/1045/1979/Mocka-Austin-Chair-2__95589.1590705646.jpg?c=1',
    title: 'Interior pack',
    description: 'Interior pack: Table + chair + plant',
    price: 60})

