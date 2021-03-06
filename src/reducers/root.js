import { combineReducers } from 'redux';
import active_tool from './active-tool';
import tool_list from './tool-list';
import raster from './raster';
import geometry from './geometry';
import results from './results';
import drawing from './drawing';
import layout from './layout';
import loading from './loading';
import menu_focus from './menu-focus';

const root_reducer = combineReducers({
    results,
    active_tool,
    tool_list,
    raster,
    geometry,
    drawing,
    layout,
    loading,
    menu_focus
});

export default root_reducer;