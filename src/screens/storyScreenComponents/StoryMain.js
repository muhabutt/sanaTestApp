import React, {useState, memo, useRef} from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import styles from '../../styles/Styles';
import {removeParagraphTag} from '../../helpers/HelperFunctions';
import {entityDecode} from '../../helpers/HtmlEntities';
import data from '../../json/TheHouseofPleasures.json';
import Loader from '../../components/Loader';
import StoryScreenOptions from './StoryScreenOptions';
import FadeInView from '../../components/FadeInView';
import Button from '../../components/Button';

const StoryMain = () => {
  const [block, setBlock] = useState(data.blocks[0]);
  const [screenClicked, setScreenClicked] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const scrollViewRef = useRef(null);
  console.log('abc');
  /**
   * On click of story screen display top back and bottom styling buttons
   */
  const clickOnStory = () => {
    setScreenClicked(!screenClicked);
  };

  /**
   * Check if the scrolling reached end of content
   */
  const scrollViewEndIsReached = (event) => {
    return (
      event.nativeEvent.layoutMeasurement.height +
        event.nativeEvent.contentOffset.y >=
      event.nativeEvent.contentSize.height - 2
    );
  };

  /**
   * split paragraphs from content of a block and return Text component
   */
  const splitContent = (contents) => {
    return contents.map((item, index) => {
      const {blockId} = item;
      if (item) {
        return (
          <Text
            key={`${blockId}-${index}`}
            allowFontScaling={true}
            style={[styles.paragraph]}
            onPress={clickOnStory}
            selectable={false}>
            {entityDecode(removeParagraphTag(item))}
          </Text>
        );
      }
    });
  };

  /**
   * set block according to choice id and scroll top
   */
  const renderChoiceContent = (id) => {
    const b = data.blocks.filter((obj) => obj.blockId === id)[0];
    setBlock(b);
    setTimeout(() => {
      scrollViewRef.current.scrollTo({
        x: 0,
        y: 0,
        animated: true,
      });
    });
  };

  /** render make choice section */
  const renderMakeChoice = (item) => {
    const {choseOne, choseTwo} = item;

    /** custom styles */
    const btnCustomStyles = {
      borderRadius: 15,
      padding: 30,
    };

    const makeChoiceSectionStyle = {
      borderTopWidth: 2,
      borderTopColor: '#75B2B7',
      borderTopStyle: 'dashed',
      borderRadius: 1,
    };

    //if there are choices
    if (
      (choseOne.target && choseOne.text) ||
      (choseTwo.target && choseTwo.text)
    ) {
      return (
        <View
          style={[
            styles.flex1,
            styles.w100,
            styles.justifyContentCenter,
            styles.alignItemCenter,
            styles.flexDirectionColumn,
            styles.pl10,
            styles.pr10,
            styles.mt20,
            makeChoiceSectionStyle,
          ]}>
          <Text style={[styles.paragraph, styles.LoraBold]}>
            {'Make a choice'}
          </Text>
          {choseOne.target && choseOne.text ? (
            <Button
              label={choseOne.text}
              buttonStyle={[
                styles.lightGreenBackground,
                btnCustomStyles,
                styles.borderWhite,
                styles.m10,
                styles.justifyContentCenter,
                styles.alignItemCenter,
                styles.w100,
              ]}
              action={() => renderChoiceContent(choseOne.target)}
            />
          ) : (
            <React.Fragment />
          )}
          {choseTwo.target && choseTwo.text ? (
            <Button
              label={choseTwo.text}
              buttonStyle={[
                styles.lightGreenBackground,
                btnCustomStyles,
                styles.borderWhite,
                styles.m10,
                styles.justifyContentCenter,
                styles.alignItemCenter,
                styles.w100,
              ]}
              action={() => renderChoiceContent(choseTwo.target)}
            />
          ) : (
            <React.Fragment />
          )}
        </View>
      );
    } else {
      // if nor choice than no choice section
      return (
        <StoryScreenOptions
          css={[
            styles.w100,
            styles.greenBackground,
            styles.justifyContentStart,
            styles.alignItemCenter,
            styles.flexDirectionRow,
            storyOptionsHeaderCustomStyle,
          ]}
          position={'header'}
        />
      );
    }
  };

  /**
   * split content data by </p> and newline and convert it to Text, and contains choice section as well
   */
  const renderContent = (id) => {
    const {content, blockId} = block;

    let contents = [];

    // when block id is not available than take the first block split content paragraphs
    if (!id) {
      contents = content.split(/<\/p>\n/g);
    }

    //if block id is available than search by block id
    if (id && id === blockId) {
      contents = content.split(/<\/p>\n/g);
    }

    return (
      <React.Fragment>
        {/*loop through the content paragraph in order to display content paragraphs in separate Text component*/}
        {splitContent(contents)}
        {/*Make choice section */}
        {renderMakeChoice(block)}
      </React.Fragment>
    );
  };

  /*Story options screen header styles */
  const storyOptionsFooterCustomStyle = {
    height: 120,
    borderTopColor: '#333',
    backgroundColor: '#fff',
    borderTopWidth: 1,
  };

  /*Story options screen footer styles */
  const storyOptionsHeaderCustomStyle = {
    height: 80,
  };

  return (
    <React.Fragment>
      {/*Status bar is hidden in the screen*/}
      <StatusBar hidden={true} />

      {/*Loop through the blocks state*/}
      {block ? (
        <React.Fragment>
          {screenClicked ? (
            <StoryScreenOptions
              css={[
                styles.w100,
                styles.greenBackground,
                styles.justifyContentStart,
                styles.alignItemCenter,
                styles.flexDirectionRow,
                storyOptionsHeaderCustomStyle,
              ]}
              position={'header'}
            />
          ) : (
            <React.Fragment />
          )}

          {/*Loop through the blocks state*/}
          <SafeAreaView style={[styles.flex1, styles.whiteBackground]}>
            <ScrollView
              ref={scrollViewRef}
              maximumZoomScale={5}
              minmumZoomScale={1}
              onScroll={(event) => {
                /*handles scroll view bottom reached event*/
                scrollViewEndIsReached(event)
                  ? setFadeOut(true)
                  : setFadeOut(false);
              }}
              scrollEventThrottle={100}>
              <View style={[styles.flex1, styles.justifyContentStart]}>
                {
                  /*render content paragraphs handler*/
                  renderContent()
                }
              </View>
            </ScrollView>
            {
              /*display fade out effect on the top of scroll view*/
              fadeOut ? (
                <FadeInView styles={[styles.fadeOut]}>
                  <View style={styles.overlay} />
                </FadeInView>
              ) : (
                <React.Fragment />
              )
            }
          </SafeAreaView>
          {
            /*when screen is clicked displays back button header, and font options in the bottom*/
            screenClicked ? (
              <StoryScreenOptions
                css={[
                  styles.w100,
                  styles.whiteBackground,
                  styles.justifyContentStart,
                  styles.alignItemCenter,
                  styles.flexDirectionRow,
                  storyOptionsFooterCustomStyle,
                ]}
                position={'footer'}
              />
            ) : (
              <React.Fragment />
            )
          }
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

// performance boost using memo
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.block === nextProps.block &&
    prevProps.fadeOut === nextProps.fadeOut
  );
};
const story = memo(StoryMain, areEqual);

export default story;
