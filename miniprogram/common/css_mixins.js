'use strict'

module.exports = {

  /**
   * arrow
   * @param [position] 方向
   * @param [borderColor] 箭头颜色
   * @param [vorderWidth] 箭头宽度
   * @param [width] 箭头大小
   * @return arrowStyle
   */
  arrow: function (mixin, position = 'right', borderColor = '#666', borderWidth = '1px', width = '8px') {
    let arrowStyle = {
      'content': '" "',
      'display': 'inline-block',
      'width': width,
      'height': width,
      'border-top': borderColor + ' solid ' + borderWidth,
      'border-right': borderColor + ' solid ' + borderWidth,
      'transform-origin': '50%',
    };

    if (position === 'right') {
      arrowStyle.transform = 'rotate(45deg)';
    }
    if (position === 'bottom') {
      arrowStyle.transform = 'rotate(135deg)';
    }
    if (position === 'left') {
      arrowStyle.transform = 'rotate(-135deg)';
    }
    if (position === 'top') {
      arrowStyle.transform = 'rotate(-45deg)';
    }

    return arrowStyle;
  },

};
