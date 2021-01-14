import React, { Component } from 'react';
import {
	Animated, Dimensions,
	FlatList, Image, SafeAreaView, StatusBar, StyleSheet, View
} from 'react-native';
// import global_style from '../Style/GlobalStyle';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;


class ProductDetais extends Component {

	constructor(props) {
		super(props)
		this.animatedWidth = new Animated.Value(0)
		this.state = {
			TopCategory: [
				{ images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-UN3b4Iv1A_-ExrAvgA2xBNCp55buREq6g&usqp=CAU' },
				// { images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Funbranded-footwear-display-window-shoe-shop-urban-171056385.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fdisplay-shoe-window.html&tbnid=6hrmQm2O1da1AM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyggegUIARC0AQ..i&docid=bZkJ6-gGkqkf3M&w=800&h=450&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyggegUIARC0AQ" },
				// { images: "https://www.google.com/imgres?imgurl=http%3A%2F%2F1.bp.blogspot.com%2F-1k6teHvdXYM%2FUzS3PJR-7QI%2FAAAAAAAACyM%2Fv25W6kep9o4%2Fs3200%2FScreenshot_2013-12-19-01-22-30-1.png&imgrefurl=http%3A%2F%2Froyaltykosmos.blogspot.com%2F2014%2F03%2Fwindow-shopping-comfy-wedding-shoes-and.html&tbnid=mMAxtFee_YkCYM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMygNegUIARCIAQ..i&docid=REPAvTzUKAyRJM&w=720&h=724&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMygNegUIARCIAQ" },
				//{ images: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Funion-shop-hong-kong-has-appointed-experienced-asian-designers-to-create-fashionable-alluring-new-products-has-been-lead-35528970.jpg&imgrefurl=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fdisplay-shoe-window.html&tbnid=DFHusCadpwtidM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyhJegQIARBf..i&docid=bZkJ6-gGkqkf3M&w=1300&h=957&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyhJegQIARBf" },
				//{ images: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcontent.paradigmmall.com.my%2Fimages%2Fstore%2Fshoes%2Fhushpuppies_store_2.jpg&imgrefurl=http%3A%2F%2Fwww.paradigmmall.com.my%2Fstore_details.aspx%3Fsid%3D143%26cat%3D13%26name%3Dshoes&tbnid=WYVHpYV_whhYRM&vet=12ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyghegUIARC2AQ..i&docid=VPbvyCbb2uBGBM&w=550&h=395&q=png%20images%20for%20shoe%20window%20shopping%20mall&hl=en&safe=active&ved=2ahUKEwjG28Lw9ZvuAhWlnksFHT54A4AQMyghegUIARC2AQ" },
			],
			Earing: [
				{ images: 'https://n3.sdlcdn.com/imgs/h/s/7/artificial-fashion-earrings-for-women-SDL414520275-1-2b99f.jpg' },
				{images:'https://2.bp.blogspot.com/-v_9yz22OHTk/Tg2kYHhOPjI/AAAAAAAAPZs/6CRz2Sohh18/s1600/Pretty%2BTrendy%2B%2526%2BStylish%2BEarrings%2BFor%2BWomen19.jpg'},
				{images: 'https://www.homsist.com/wp-content/uploads/2018/07/jew0019.jpg'},
				{images:'https://2.bp.blogspot.com/-v_9yz22OHTk/Tg2kYHhOPjI/AAAAAAAAPZs/6CRz2Sohh18/s1600/Pretty%2BTrendy%2B%2526%2BStylish%2BEarrings%2BFor%2BWomen19.jpg'}
			],
			kids: [
				{ images: 'https://cpng.pikpng.com/pngl/s/505-5054526_kids-kids-wear-png-clipart.png' },

				{ images: 'https://www.pikpng.com/pngl/m/121-1216622_banner-library-stock-dancing-transparent-kid-hip-hop.png' }
			],
			front: [
				{ images: 'https://shericreates.files.wordpress.com/2013/05/screen-shot-2013-05-07-at-8-51-52-pm.png' },
				{ images: 'https://shericreates.files.wordpress.com/2013/05/screen-shot-2013-05-07-at-9-03-28-pm.png' },
				{ images: 'https://shericreates.files.wordpress.com/2013/05/screen-shot-2013-05-07-at-8-38-24-pm.png' },
				{ images: 'https://shericreates.files.wordpress.com/2013/05/screen-shot-2013-05-07-at-9-05-10-pm.png' },
				{ images: 'https://shericreates.files.wordpress.com/2013/05/screen-shot-2013-05-07-at-9-07-45-pm.png' }
			],
			param_index: '',
			newArray: []
		}

		this.state.param_index = this.props.navigation.state.params.param_index;
		console.log("param_index----", this.state.param_index)

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


				{this.state.param_index == 0 ?

					<FlatList
						data={this.state.front}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) =>

							<View style={{ padding: 5, }}>

								<View style={{ borderWidth: 1, alignSelf: "center", borderRadius: 5, }}>

									<Image
										style={{ width: deviceWidth, height: 200, resizeMode: 'contain' }}
										source={{ uri: item.images }}
									/>
								</View>

							</View>
						}
					/>
					: null}

				{this.state.param_index == 1 ?
					<FlatList
						data={this.state.kids}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) =>

							<View style={{ padding: 5, }}>

								<View style={{ borderWidth: 1, alignSelf: "center", borderRadius: 5, }}>

									<Image
										style={{ width: deviceWidth, height: 200, resizeMode: 'contain' }}
										source={{ uri: item.images }}
									/>
								</View>

							</View>
						}
					/>
					: null}

				{this.state.param_index == 2 ?
					<FlatList
						data={this.state.Earing}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) =>

							<View style={{ padding: 5, }}>

								<View style={{ borderWidth: 1, alignSelf: "center", borderRadius: 5, }}>

									<Image
										style={{ width: deviceWidth, height: 200, resizeMode: 'contain' }}
										source={{ uri: item.images }}
									/>
								</View>

							</View>
						}
					/>
					: null}


				{this.state.param_index == 3 ?
					<FlatList
						data={this.state.TopCategory}
						keyExtractor={(item, index) => index.toString()}
						showsHorizontalScrollIndicator={false}
						renderItem={({ item, index }) =>

							<View style={{ padding: 5, }}>

								<View style={{ borderWidth: 1, alignSelf: "center", borderRadius: 5, }}>

									<Image
										style={{ width: deviceWidth, height: 200, resizeMode: 'contain' }}
										source={{ uri: item.images }}
									/>
								</View>

							</View>
						}
					/>
					: null}

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

export default ProductDetais;