import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
    Animated, Dimensions, Easing,
    SafeAreaView, StatusBar, StyleSheet, View, Text, FlatList, Pressable, Image
} from 'react-native';
import DeviceInfo from "react-native-device-info";
import { ScrollView } from 'react-native-gesture-handler';
// import global_style from '../Style/GlobalStyle';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;


class ProductDetails extends Component {

    constructor(props) {
        super(props)
        this.animatedWidth = new Animated.Value(0)
        this.state = {
            TopCategory: [
                { images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-UN3b4Iv1A_-ExrAvgA2xBNCp55buREq6g&usqp=CAU' },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Funbranded-footwear-display-window-shoe-shop-urban-171056385.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fdisplay-shoe-window.html&tbnid=6hrmQm2O1da1AM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyggegUIARC0AQ..i&docid=bZkJ6-gGkqkf3M&w=800&h=450&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyggegUIARC0AQ" },
                { images: "https://www.google.com/imgres?imgurl=http%3A%2F%2F1.bp.blogspot.com%2F-1k6teHvdXYM%2FUzS3PJR-7QI%2FAAAAAAAACyM%2Fv25W6kep9o4%2Fs3200%2FScreenshot_2013-12-19-01-22-30-1.png&imgrefurl=http%3A%2F%2Froyaltykosmos.blogspot.com%2F2014%2F03%2Fwindow-shopping-comfy-wedding-shoes-and.html&tbnid=mMAxtFee_YkCYM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMygNegUIARCIAQ..i&docid=REPAvTzUKAyRJM&w=720&h=724&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMygNegUIARCIAQ" },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Funion-shop-hong-kong-has-appointed-experienced-asian-designers-to-create-fashionable-alluring-new-products-has-been-lead-35528970.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fdisplay-shoe-window.html&tbnid=DFHusCadpwtidM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyhJegQIARBf..i&docid=bZkJ6-gGkqkf3M&w=1300&h=957&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyhJegQIARBf" },
                { images: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcontent.paradigmmall.com.my%2Fimages%2Fstore%2Fshoes%2Fhushpuppies_store_2.jpg&imgrefurl=http%3A%2F%2Fwww.paradigmmall.com.my%2Fstore_details.aspx%3Fsid%3D143%26cat%3D13%26name%3Dshoes&tbnid=WYVHpYV_whhYRM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyghegUIARC2AQ..i&docid=VPbvyCbb2uBGBM&w=550&h=395&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyghegUIARC2AQ" },
            ],
            Earing: [
                { images: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fstorage.sg.content-cdn.io%2Fcdn-cgi%2Fimage%2F%257Bwidth%257D%2C%257Bheight%257D%2Cquality%3D75%2Cformat%3Dauto%2Fin-resources%2Fd7048855-742a-406c-a67d-5c2962e69e5e%2FImages%2FProductImages%2FSource%2F1000540924.jpg&imgrefurl=https%3A%2F%2Fwww.pngadgil.com%2Fproducts%2Fgold-gold-earrings-gold-drops%2Fpng-jewellery%2Fkeyara-22kt-gold-jhumka-earrings-by-png-jewellers%2Fpid-15480759.aspx&tbnid=WyHQw4O_jOSFuM&vet=12ahUKEwiOwOqW-ZvuAhXZnksFHRt7Ds8QMygBegUIARDNAQ..i&docid=eKKpAwC-tvRm6M&w=1500&h=1500&q=png%20images%20for%20earing%20&hl=en&safe=active&ved=2ahUKEwiOwOqW-ZvuAhXZnksFHRt7Ds8QMygBegUIARDNAQ" },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngfind.com%2Fpngs%2Fm%2F88-882701_earring-png-free-download-ear-ring-jewellery-png.png&imgrefurl=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FoiJTwm_earring-png-free-download-ear-ring-jewellery-png%2F&tbnid=7Wp3UgWpZzn5qM&vet=12ahUKEwiOwOqW-ZvuAhXZnksFHRt7Ds8QMygMegUIARDkAQ..i&docid=P61tkOxCPXCCDM&w=840&h=618&q=png%20images%20for%20earing%20&hl=en&safe=active&ved=2ahUKEwiOwOqW-ZvuAhXZnksFHRt7Ds8QMygMegUIARDkAQ" },

            ],
            kids: [

                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2F4.imimg.com%2Fdata4%2FJX%2FKJ%2FNSDMERP-43742246%2Fkidsdress-500x500.png&imgrefurl=https%3A%2F%2Fwww.indiamart.com%2Fwish-want-wear%2F&tbnid=jmU7QWmQa_O2RM&vet=12ahUKEwiSpqfB-ZvuAhUQQn0KHTT9AMIQMygfegUIARDfAQ..i&docid=nVzjK_3sS4fJHM&w=500&h=300&itg=1&q=png%20images%20for%20kids%20shopping%20window&hl=en&safe=active&ved=2ahUKEwiSpqfB-ZvuAhUQQn0KHTT9AMIQMygfegUIARDfAQ" },
                { images: "https://www.google.com/imgres?imgurl=http%3A%2F%2F3.bp.blogspot.com%2F-PnIeSRDohu4%2FUvPIX4TjGNI%2FAAAAAAAA5HI%2F1XTa3DdgmaY%2Fs1600%2FHarvey-nichols-windows1.png&imgrefurl=https%3A%2F%2Fwww.fashionfoiegras.com%2F2014%2F02%2Fharvey-nichols-imagines-school-wear.html&tbnid=jOwy8Id42NvgvM&vet=12ahUKEwiSpqfB-ZvuAhUQQn0KHTT9AMIQMygoegUIARDxAQ..i&docid=Shmk8sZutpmfHM&w=640&h=520&q=png%20images%20for%20kids%20shopping%20window&hl=en&safe=active&ved=2ahUKEwiSpqfB-ZvuAhUQQn0KHTT9AMIQMygoegUIARDxAQ" },
                { images: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fmykidsbronx.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fmykids11.png&imgrefurl=http%3A%2F%2Fmykidsbronx.com%2F&tbnid=bZNVXxokfdRePM&vet=12ahUKEwiSpqfB-ZvuAhUQQn0KHTT9AMIQMyg5egQIARA8..i&docid=qgJH894HBBo27M&w=498&h=651&q=png%20images%20for%20kids%20shopping%20window&hl=en&safe=active&ved=2ahUKEwiSpqfB-ZvuAhUQQn0KHTT9AMIQMyg5egQIARA8" },
            ],
            front: [
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flancashireshopfrontshome.files.wordpress.com%2F2019%2F07%2Fshop-front-design.png&imgrefurl=https%3A%2F%2Flancashireshopfronts.home.blog%2F2019%2F07%2F23%2Fsome-shop-front-design-mistakes-that-may-cost-your-business-big-way%2F&tbnid=zNe_GZgJVOW-IM&vet=12ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygQegUIARDPAQ..i&docid=i0M2zdBkVWQ5jM&w=955&h=597&q=png%20images%20for%20frontshopping%20window&hl=en&safe=active&ved=2ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygQegUIARDPAQ" },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F105724068%2Fimage.jpg&imgrefurl=https%3A%2F%2Fwww.timeout.com%2Fnewyork%2Fthings-to-do%2Fholiday-windows-in-new-york-city&tbnid=h7khepVjvd6PfM&vet=12ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygWegUIARDdAQ..i&docid=5HwfGL1njCDLIM&w=2002&h=978&q=png%20images%20for%20frontshopping%20window&hl=en&safe=active&ved=2ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygWegUIARDdAQ" },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftownandcountryvillage.com%2Fwp-content%2Fuploads%2F2016%2F02%2FDRAPERSDAMONS-IV7A8871_M.png&imgrefurl=https%3A%2F%2Ftownandcountryvillage.com%2Fhome%2Fdrapersdamons-iv7a8871_m%2F&tbnid=D8VwN1qBgjGmQM&vet=12ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygbegUIARDtAQ..i&docid=GFSKMTOVu2UblM&w=510&h=340&itg=1&q=png%20images%20for%20frontshopping%20window&hl=en&safe=active&ved=2ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygbegUIARDtAQ" },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontent3.jdmagicbox.com%2Fcomp%2Fchandrapur%2Fe7%2F9999p7172.7172.190628191854.r5e7%2Fcatalogue%2Fmr-miss-dress-code-chandrapur-0cd6hgrube.jpg%3Fclr%3D57f2c&imgrefurl=https%3A%2F%2Fwww.justdial.com%2FChandrapur%2FMr-miss-dress-code-Near-PNG-Jweller-N%2F9999P7172-7172-190628191854-R5E7_BZDET&tbnid=li6f8lWz_Luh1M&vet=12ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygtegUIARCSAg..i&docid=dXvDj-wh36iEfM&w=1920&h=883&q=png%20images%20for%20frontshopping%20window&hl=en&safe=active&ved=2ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMygtegUIARCSAg" },
                { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flirp-cdn.multiscreensite.com%2Fd5177fd6%2Fdms3rep%2Fmulti%2Fopt%2F6.%252BDSCF0580-5aa30dcf-640w.JPG&imgrefurl=https%3A%2F%2Fwww.connectad.co.uk%2Fshop-and-store-fronts&tbnid=qxqz2vH3stZa4M&vet=12ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMyhBegQIARBQ..i&docid=rZ2rzw3c6cPjTM&w=640&h=360&q=png%20images%20for%20frontshopping%20window&hl=en&safe=active&ved=2ahUKEwjHq93s-ZvuAhULZSsKHSigBgUQMyhBegQIARBQ" },

            ],
            param_index: '',
            newArray: []
        }

        this.state.param_index = this.props.navigation.state.params.param_index;
        console.log("param_index----", this.state.param_index)

    }

    componentDidMount() {

        //stringsoflanguages.setLanguage('ar');
        //get device unique id
        this.setState({ deviceId: DeviceInfo.getUniqueId() });
        //Save to asynch storage
        AsyncStorage.setItem('deviceId', DeviceInfo.getUniqueId());

    }


    startAnimation() {
        Animated.timing(this.animatedWidth, {
            toValue: deviceHeight * 0.5 - 210,
            duration: 1000,
            easing: Easing.linear,

        }).start();
    }


    render() {

        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

                {/* for status bar color */}
                <StatusBar
                    barStyle="dark-content"
                    hidden={true}
                    backgroundColor={global.statusBarColor}
                    translucent={true} />

                <ScrollView style={{ padding: 10 }}>

                    {this.state.param_index == 0 ?
                        <FlatList
                            data={this.state.front}
                           
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>

                                <View
                                   

                                    style={{ paddingVertical: 5,width:200,height:200 }}>

                                    <Image
                                        style={{ width: "100%", height: "100%", }}
                                        source={{ uri: item.images }}
                                    />


                                </View>

                            } /> : null}

                    {this.state.param_index == 1 ?
                        <FlatList
                            data={this.state.TopCategory}
                            style={{ width: deviceWidth, marginTop: 10 }}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>

                                <Pressable
                                    activeOpacity={global.activeOpacity}
                                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}

                                    style={{ paddingVertical: 5 }}>

                                    <View style={[styles.dropdownStyle,]}>

                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={[styles.text, { backgroundColor: item.color }]}>{item.Side}</Text>

                                        </View>

                                    </View>


                                </Pressable>

                            } /> : null}

                    {this.state.param_index == 2 ?
                        <FlatList
                            data={this.state.TopCategory2}
                            style={{ width: deviceWidth, marginTop: 10 }}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>

                                <Pressable
                                    activeOpacity={global.activeOpacity}
                                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}

                                    style={{ paddingVertical: 5 }}>

                                    <View style={[styles.dropdownStyle,]}>

                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={[styles.text, { backgroundColor: item.color }]}>{item.Side}</Text>

                                        </View>

                                    </View>


                                </Pressable>

                            } /> : null}
                    {this.state.param_index == 3 ?
                        <FlatList
                            data={this.state.TopCategory3}
                            style={{ width: deviceWidth, marginTop: 10 }}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>

                                <Pressable
                                    activeOpacity={global.activeOpacity}
                                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}

                                    style={{ paddingVertical: 5 }}>

                                    <View style={[styles.dropdownStyle,]}>

                                        <View style={{ marginVertical: 20 }}>
                                            <Text style={[styles.text, { backgroundColor: item.color }]}>{item.Side}</Text>

                                        </View>

                                    </View>


                                </Pressable>

                            } /> : null}




                </ScrollView>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
    },

    text1: {
        fontSize: 14,
        marginTop: 10
    },
    textBtn: {
        fontSize: 16,
        marginTop: 10,
        backgroundColor: 'green',
        height: 40,
        width: 40,
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        opacity: 0.5
    },
    dropdownStyle: {
        margin: 10,
        backgroundColor: '#FFF',
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        borderColor: '#707070',
        borderRadius: 5,
        ...Platform.select({
            ios: {
                borderWidth: 0.25,
                padding: 15,
                shadowColor: '#0000000D',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 3,
                elevation: 3,

            },
            android: {
                shadowColor: '#0000000D',
                shadowOffset: { width: 10, height: 5 },
                shadowOpacity: 10,
                shadowRadius: 4,
                elevation: 4,

            }
        })
    },
});

export default ProductDetails;