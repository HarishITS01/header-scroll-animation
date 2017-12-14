import {
    Dimensions
} from 'react-native';
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
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 15,
        color: "#000000"
    }
});
