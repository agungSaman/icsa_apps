import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../../styles/styles';
import MyAppBar from '../../../components/AppBarsHeaders';
import {DataMember} from '../../../models/membershipListModel';
import authService from '../../../services/auth.service';
import MemberList from '../../../components/MemberList';
import colors from '../../../config/colors';
import GlobalTextStyle from '../../../styles/globalTextStyle';

const MemberListScreen: React.FC = () => {
  const [memberListData, setMemberlistData] = useState<DataMember[] | []>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (pageNumber: number) => {
    try {
      setLoading(true);
      const data = await authService.getInfoMemberListData(pageNumber);
      setMemberlistData(data?.data ?? []);
      setTotalPage(data?.meta.last_page ?? 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePagePress = (pageNumber: number) => {
    console.log(loading);
    setPage(pageNumber);
  };

  const renderPaginationItem = (pageNumber: number, isActive: boolean) => (
    <TouchableOpacity
      key={pageNumber}
      style={[styles.paginationItem, isActive && styles.activePaginationItem]}
      onPress={() => handlePagePress(pageNumber)}>
      <Text
        style={[
          styles.paginationText,
          isActive && styles.activePaginationText,
        ]}>
        {pageNumber}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <View style={globalStyles.responsiveBox}>
          <MyAppBar title="Member List" isHome={false} isRegisters={false} />

          <View style={styles.containerHeaders}>
            <Text style={GlobalTextStyle.textLargeBlack}>
              List of ICSA Members
            </Text>
          </View>
          <FlatList
            data={memberListData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.timeline}>
                <MemberList key={item.id} item={item} />
              </View>
            )}
          />
          <View style={styles.paginationContainer}>
            {Array.from({length: totalPage}).map((_, index) =>
              renderPaginationItem(index + 1, index + 1 === page),
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  containerHtml: {
    marginLeft: 10,
    marginBottom: 10,
  },
  container: {
    flex: 0,
    height: '50%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerText: {
    flex: 0,
    padding: 10,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    flex: 0,
    padding: 10,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerHeaders: {
    flex: 0,
    marginTop: 30,
    marginBottom: 10,
    height: '3%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBody: {
    flex: 0,
    height: '10%',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontFamily: 'Centrale Sans Light',
  },
  text1: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.BLACK,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.RED,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  timeline: {
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationItem: {
    padding: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 50,
  },
  activePaginationItem: {
    backgroundColor: colors.RED,
  },
  paginationText: {
    color: colors.RED,
  },
  activePaginationText: {
    color: colors.WHITE,
  },
});

export default MemberListScreen;
