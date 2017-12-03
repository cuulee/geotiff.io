import gio from '@geotiff/gio';
import BaseStatsTool from './BaseStatsTool';
import MedianToolComponent from '../../components/tools/MedianToolComponent';
import { withProps } from 'recompose';

const calculate_median = (raster, coors) => {
    return gio.median(raster, coors)
        .map(value => value.toFixed(2)).join(', ');
}

const MedianTool = withProps(
    { func: calculate_median }
)(BaseStatsTool(MedianToolComponent));

export default MedianTool;