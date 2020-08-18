import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import styles from '../styles/styles';
import {removeParagraphTag} from '../helpers/helperFunctions';
import {entityDecode} from '../helpers/HtmlEntities';
import data from '../json/TheHouseofPleasures.json';
import Loader from '../components/Loader';
import StoryScreenOptions from '../components/StoryScreenOptions';
import FadeInView from '../components/FadeInView';
import Button from '../components/Button';

const StoryMain = () => {
  const [blocks, setBlocks] = useState([]);
  const [screenClicked, setScreenClicked] = useState(false);
  const [ScrollViewTopFadeOut, setScrollViewTopFadeOut] = useState(false);

  useEffect(() => {
    //get data from json file and keep it in state
    setBlocks(data.blocks);
  }, [blocks]);

  /**
   * On click of story screen display top back and bottom stylling buttons
   */
  const clickOnStory = () => {
    setScreenClicked(!screenClicked);
  };

  /**
   * Check if the scrolling reached end of content
   */
  const scrollViewEndIsReached = (event) => {
    const paddingBottom = 20;
    return (
      event.nativeEvent.layoutMeasurement.height +
        event.nativeEvent.contentOffset.y >=
      event.nativeEvent.contentSize.height - paddingBottom
    );
  };

  /**
   * display choice component when reached the end of content and fade scroll top
   */
  const fadeOutScrollViewTop = () => {
    setScrollViewTopFadeOut(true);
  };
  /**
   * split content data by </p> and newline and convert it to Text, and contains choice section as well
   */
  const renderContent = (id) => {
    return blocks.map((block, i) => {
      // display only the first block and exit on the second block
      if (!id && i > 0) {
        return false;
      }

      //if block id is avaialble than search by block id @todo

      // split content paragraphs
      let content = block.content.split(/<\/p>\n/g);

      return (
        <React.Fragment key={`${i}`}>
          {/*loop through the content paragraph in order to display content paragraphs in separate Text component*/}
          {content.map((item, index) => {
            if (item) {
              return (
                <Text
                  key={`${item.blockId}-${index}`}
                  allowFontScaling={true}
                  style={[styles.paragraph]}
                  onPress={clickOnStory}
                  selectable={false}>
                  {entityDecode(removeParagraphTag(item))}
                </Text>
              );
            }
          })}
          {/*Make choice section */}
          <View
            style={[
              styles.flex1,
              styles.w100,
              styles.justifyContentCenter,
              styles.alignItemCenter,
              styles.flexDirectionColumn,
            ]}>
            <Text style={[styles.paragraph, styles.LoraBold]}>
              {'Make a choice'}
            </Text>
            <Button
              label={block.choseOne.text}
              buttonStyle={[
                styles.lightGreenBackground,
                {
                  borderRadius: 15,
                  padding: 30,
                },
                styles.borderWhite,
                styles.m10,
                styles.justifyContentCenter,
                styles.alignItemCenter,
                styles.w100,
              ]}
              action={() => renderContent(block.choseOne.target)}
            />
            <Button
              label={block.choseTwo.text}
              buttonStyle={[
                styles.lightGreenBackground,
                {
                  borderRadius: 15,
                  padding: 30,
                },
                styles.borderWhite,
                styles.m10,
                styles.justifyContentCenter,
                styles.alignItemCenter,
                styles.w100,
              ]}
            />
          </View>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      {/*Status bar is hidden in the screen*/}
      <StatusBar showHideTransition={'slide'} hidden={true} />

      {/*Loop through the blocks state*/}
      {blocks.length > 0 ? (
        <React.Fragment>
          {screenClicked ? (
            <StoryScreenOptions
              css={[
                styles.w100,
                styles.greenBackground,
                styles.justifyContentStart,
                styles.alignItemCenter,
                styles.flexDirectionRow,
                {
                  height: '10%',
                },
              ]}
              position={'header'}
            />
          ) : (
            <React.Fragment />
          )}

          {/*Loop through the blocks state*/}
          <SafeAreaView style={[styles.flex1, styles.whiteBackground]}>
            <ScrollView
              maximumZoomScale={5}
              minmumZoomScale={1}
              onScroll={(event) => {
                /*handles scroll view bottom reached event*/

                if (scrollViewEndIsReached(event)) {
                  fadeOutScrollViewTop();
                } else {
                  setScrollViewTopFadeOut(false);
                }
              }}
              scrollEventThrottle={400}>
              <View style={[styles.flex1, styles.justifyContentStart]}>
                {
                  /*render content paragraphs handler*/
                  renderContent()
                }
              </View>
            </ScrollView>
            {
              /*display fade out effect on the top of scroll view*/
              ScrollViewTopFadeOut ? (
                <FadeInView style={styles.fadeOut}>
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
                  {
                    height: '12%',
                    borderTopColor: '#333',
                    borderTopWidth: 1,
                  },
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

//currently no propTypes
StoryMain.propTypes = {};

export default StoryMain;
