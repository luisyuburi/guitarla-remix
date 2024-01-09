export interface GuitarInterface {
    guitar: {
        name: string,
        description: any
        price: number,
        url: string,
        image: {
            data: {
                attributes: {
                    name: string,
                    url: string,
                    formats: {
                        small: {
                            name: string
                            url: string
                        }
                    }
                }
            }
        },

    }

}