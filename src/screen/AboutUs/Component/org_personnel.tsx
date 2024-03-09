import * as React from 'react';
import authService from '../../../services/auth.service';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DataPersonnel} from '../../../models/organizationModels';
import colors from '../../../config/colors';
import PersonelList from '../../../components/PersonelList';

const OrgPersonnelScreen = () => {
  const [personelData, setPersonelData] = React.useState<DataPersonnel[] | []>(
    [],
  );
  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await authService.getInfoOrganizationData();
        setPersonelData(data?.data ?? []);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const keyExtractor = (item: DataPersonnel) => item.id.toString();

  const toggleItem = (id: number) => {
    setPersonelData(prevData =>
      prevData.map(item =>
        item.id === id ? {...item, expanded: !item.expanded} : item,
      ),
    );
  };

  const renderItem = (item: ListRenderItemInfo<DataPersonnel>) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => toggleItem(item.item.id)}>
        <View
          style={[
            styles.containerItem,
            item.item.expanded ? styles.containerItem1 : styles.containerItem,
          ]}>
          <Text
            style={[
              styles.itemTitle,
              item.item.expanded ? styles.itemTitle1 : styles.itemTitle,
            ]}>
            {item.item.name}
          </Text>
          <Image
            source={
              item.item.expanded
                ? require('../../../assets/icons/ic_arrow_up.png')
                : require('../../../assets/icons/ic_arrow_down.png')
            }
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      {item.item.expanded ? (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.timeline}>
            {item.item.member.map((items, index) => (
              <PersonelList key={index} item={items} />
            ))}
          </View>
        </ScrollView>
      ) : (
        <></>
      )}
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={personelData}
        keyExtractor={keyExtractor}
        renderItem={item => renderItem(item)}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  timeline: {
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  container: {
    flex: 0,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerItem: {
    flex: 0,
    height: 65,
    padding: 10,
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
    borderRadius: 10,
  },
  containerItem1: {
    flex: 0,
    padding: 10,
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.LIGHT_GRAY,
    borderWidth: 1,
    borderRadius: 10,
  },
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 14,
    width: '90%',
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  itemTitle1: {
    fontSize: 14,
    width: '90%',
    fontWeight: 'bold',
    color: colors.RED,
  },
  itemContent: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
  },
  image: {
    width: 10,
    height: 10,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
});

export default OrgPersonnelScreen;
