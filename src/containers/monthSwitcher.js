import {connect} from 'react-redux'
import Months from '../components/Months'
import {switchMonth} from '../actions'
import moment from 'moment'


moment.locale('ru');
let curTime = moment();

const mapStateToProps = (state) => ({
    month: moment(state.switchTime).format('MMMM')
})

const mapDispatchToProps = (dispatch) => ({
    nextWeek: () => {
        curTime = curTime.add(1,'weeks').startOf('isoWeek');
        dispatch(switchMonth(+curTime.format('x')));
    },
    prevWeek: () => {
        curTime = curTime.subtract(1,'weeks').startOf('isoWeek');
        dispatch(switchMonth(+curTime.format('x')))
    }
})

const MonthSwitcher = connect(mapStateToProps,mapDispatchToProps)(Months);

export default MonthSwitcher