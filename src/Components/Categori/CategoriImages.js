import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import config from '../../../config'

const CategotiImages = ({ data }) => {
    //console.log(data.url)

    const imageUri = ({ data }) => {
        if (data) {
            `${config.BASE_URL}${data.url}`
        } else {
            'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
        }
    }


    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            {data ? (
                <Image
                    source={{ uri: `${config.BASE_URL}${data.url}` }}
                    style={styles.image} />

            ) : (
                    <Image
                        source={{
                            uri: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'
                        }}
                        style={styles.image} />
                )}


        </View>

    )
}

export default CategotiImages

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
})
