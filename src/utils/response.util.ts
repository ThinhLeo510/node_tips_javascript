import _ from 'lodash'

export const getInforData = ({ fields = [], object = {} }: any) => {
    return _.pick(object, fields)
}
