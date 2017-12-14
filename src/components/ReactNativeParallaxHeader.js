import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const jsonData = [
    {
        txtTitle: "Live",
        txtDefinition: "As our lives become more hectic, living well is about efficiency and balance. Kafnu empowers its members with spaces and community providing a physical, intellectual and social launch pad."
    },
    {
        txtTitle: "Work",
        txtDefinition: "Co-Working is everywhere. At Kafnu, we take it a step further."
    },
    {
        txtTitle: "Play",
        txtDefinition: "Playing is the key to creativity. Kafnu encourages you to do it. Unplug. Relax. Set down the phone. Swim. Run. Sing. Paint. Break something."
    },
    {
        txtTitle: "Learn",
        txtDefinition: "At Kafnu, learning never stops. From events to spontaneous conversations to unexpected insights to eye-opening inspiration – learning is our constant."
    }
]
export class ReactNativeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(jsonData)
        }
    }
    render() {
        const { onScroll = () => { } } = this.props;
        return (
            <View style={styles.container}>
                <ListView
                    ref="ListView"
                    style={styles.container}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
                        <View key={rowData} style={styles.row}>
                            <View style={styles.rowViewParent}>
                                <Text style={styles.rowTxtTitle}>{rowData.txtTitle}</Text>
                                <Text style={styles.rowText}>{rowData.txtDefinition}</Text>
                            </View>
                        </View>
                    )}
                    renderScrollComponent={props => (
                        <ParallaxScrollView
                            onScroll={onScroll}
                            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                            backgroundSpeed={10}
                            renderBackground={() => (
                                <View key="background">
                                    <Image source={{
                                        uri: 'https://cdn.kafnu.com/uploads/2017/10/26082207/Home_TP_Location1.jpg',
                                        height: PARALLAX_HEADER_HEIGHT
                                    }} />
                                    <View style={{
                                        position: 'absolute',
                                        top: 0,
                                        width: window.width,
                                        backgroundColor: 'rgba(0,0,0,.2)',
                                        height: PARALLAX_HEADER_HEIGHT
                                    }} />
                                </View>
                            )}
                            renderStickyHeader={() => (
                                <View key="sticky-header" style={styles.stickySection}>
                                    <View style={styles.stickyHeaderParent}>
                                        <View style={styles.imgLeftArrowParent}>
                                            {/* <Image style={styles.imgLeftArrow} source={require("../img/Icons/left-arrow.png")}></Image> */}
                                        </View>
                                        <View style={styles.txtTiteParent}>
                                            <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
                                        </View>

                                        <View style={styles.imgSearchParent}>
                                            {/* <Image style={styles.imgsearch} source={require("../img/Icons/search.png")}></Image> */}
                                        </View>
                                    </View>
                                </View>
                            )}

                            renderFixedHeader={() => (
                                <View key="fixed-header" style={styles.fixedSection}>
                                    <View style={styles.stickyHeaderParent}>
                                        <View style={styles.imgLeftArrowParent}>
                                            <Image style={styles.imgLeftArrow} source={require("../img/Icons/left-arrow.png")}></Image>
                                        </View>
                                        <View style={styles.txtTiteParent}>
                                        </View>
                                        <View style={styles.imgSearchParent}>
                                            <Image style={styles.imgsearch} source={require("../img/Icons/search.png")}></Image>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    )}
                />
            </View>
        );
    }
}

const window = Dimensions.get('window');
const AVATAR_SIZE = 120;
const ROW_HEIGHT = 55;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 55;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    stickyHeaderParent: {
        flexDirection: 'row',
    },
    imgLeftArrow: {
        margin: 10,
    },
    imgLeftArrowParent: {
        flex: 1
    },
    txtTiteParent: {
        flex: 5
    },
    imgsearch: {
        margin: 10
    },
    imgSearchParent: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        justifyContent: 'flex-end'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        top: 10,
        width: window.width,
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    rowViewParent: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 3,
        height: 100,
        margin: 8,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 10,
        color: "#000000",
        marginTop: 3,
        marginLeft: 30
    },
    rowTxtTitle: {
        fontSize: 20,
        marginLeft: 10,
        color: "#000000",

    }
});