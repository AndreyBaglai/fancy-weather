class Pictures {
    getPictures(city) {
        const PHOTO_API_TOKEN = 'd5fbdbc4ae0848723de931f78c74fb1622310a4dcbe00be8d17db8343b6f037b';
        const proxy = 'https://cors-anywhere.herokuapp.com/';

        return fetch(`${proxy}https://api.unsplash.com/search/photos?query=${city}&client_id=${PHOTO_API_TOKEN}`).then(res => res.json());
    }

    randomPicturesIndex(max) {
        return Math.floor(Math.random() * max);
    }

    parsePictures(pictures) {
        return pictures.results.map(obj => {
            return obj.urls.raw;
        });
    }

    getPhotosBg(links) {
        const link = links[0];
        console.log(link);
    }
}
