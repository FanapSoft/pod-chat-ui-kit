// src/gap/index
import React, {PureComponent} from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import PropTypes from 'prop-types';
import Container from "../container";
import style from "../../styles/modules/scroller/index.scss";

function mobileCheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}

const strings = {
  THRESHOLD_UNIT_MULTIPLY: "THRESHOLD_UNIT_MULTIPLY",
  THRESHOLD_UNIT_PIXEL: "THRESHOLD_UNIT_PIXEL"
};
export default class extends PureComponent {


  static propTypes = {
    threshold: PropTypes.number,
    thresholdUnit: PropTypes.string,
    className: PropTypes.string,
    onScrollBottom: PropTypes.func,
    onScrollTop: PropTypes.func,
    onScrollBottomThreshold: PropTypes.func,
    onScrollBottomThresholdCondition: PropTypes.bool,
    onScrollTopThreshold: PropTypes.func,
    onScrollTopThresholdCondition: PropTypes.bool,
  };

  static defaultProps = {
    threshold: 0,
    thresholdUnit: strings.THRESHOLD_UNIT_MULTIPLY,
    className: null,
    onScrollBottom: null,
    onScrollTop: null,
    onScrollBottomThreshold: null,
    onScrollBottomThresholdCondition: null,
    onScrollTopThreshold: null,
    onScrollTopThresholdCondition: null
  };

  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.scrollerNode = React.createRef();
    this.lastScrollPosition = null;
    this._currentScrollBottom = 0;
  };

  componentDidUpdate(oldProps) {
    const {children: oldChildren} = oldProps;
    const {children, checkForSnapping} = this.props;
    if (checkForSnapping) {
      if (oldChildren.props.children.length !== children.props.children.length) {
        const current = ReactDOM.findDOMNode(this.scrollerNode.current);
        const info = this.getInfo();
        if (info.scrollTop <= 0) {
          current.scrollTop = info.scrollHeight - this._currentScrollBottom;
        }
      }
    }
  }

  gotoBottom() {
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    current.scrollTop = current.scrollHeight;
  }

  gotoTop() {
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    current.scrollTop = 0;
  }

  gotoElement(elementId) {
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    const elem = current.querySelector(`#${elementId}`);
    if (!elem) {
      return false;
    }
    elem.scrollIntoView();
    return true;
  }

  getInfo() {
    const {threshold} = this.props;
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    const scrollHeight = current.scrollHeight;
    const scrollTop = current.scrollTop;
    const scrollPosition = current.offsetHeight + scrollTop;
    const info = {
      isInBottomEnd: false,
      isInTopEnd: false,
      isInBottomThreshold: false,
      isInTopThreshold: false,
      isScrollingTop: false,
      isScrollingBottom: false,
      scrollHeight,
      scrollTop,
      scrollPosition
    };
    if (scrollPosition >= scrollHeight) {
      info.isInBottomEnd = true;
    }

    if (scrollPosition > this.lastScrollPosition) {
      info.isScrollingBottom = true;
      if (scrollPosition >= scrollHeight - (scrollHeight / threshold)) {
        info.isInBottomThreshold = true;
      }
    } else if (scrollPosition < this.lastScrollPosition) {
      info.isScrollingTop = true;
      if (scrollTop <= (scrollHeight / threshold)) {
        info.isInTopThreshold = true;
      }
    }
    return info;

  }

  onScroll(e) {
    const {onScroll, onScrollBottomEnd, onScrollBottom, onScrollTop, onScrollBottomThreshold, onScrollTopThreshold, threshold, onScrollBottomThresholdCondition, onScrollTopThresholdCondition, checkForSnapping} = this.props;
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);
    if (!current) {
      return;
    }
    if (onScroll) {
      onScroll(e, current);
    }
    const info = this.getInfo();
    if (checkForSnapping) {
      this._currentScrollBottom = info.scrollHeight - info.scrollTop;
    }
    const {isInBottomEnd, isInTopEnd, isInBottomThreshold, isInTopThreshold, isScrollingTop, isScrollingBottom, scrollHeight, scrollTop, scrollPosition} = info;
    if (isInBottomEnd) {
      if (onScrollBottomEnd) {
        onScrollBottomEnd();
      }
    }
    if (isScrollingBottom) {
      if (onScrollBottom) {
        onScrollBottom();
      }
      if (onScrollBottomThreshold) {
        if (onScrollBottomThresholdCondition === null || onScrollBottomThresholdCondition) {
          if (isInBottomThreshold) {
            onScrollBottomThreshold();
          }
        }
      }
    } else if (isScrollingTop) {
      if (onScrollTop) {
        onScrollTop();
      }
      if (onScrollTopThreshold) {
        if (onScrollTopThresholdCondition === null || onScrollTopThresholdCondition)
          if (isInTopThreshold) {
            this.onTopThreshod = true;
            onScrollTopThreshold();
          }
      }
    }
    this.lastScrollPosition = scrollPosition;
  }

  render() {
    const {className, children} = this.props;
    const current = ReactDOM.findDOMNode(this.scrollerNode.current);

    let classNames = classnames({
      [style.Scroller]: true,
      [style["Scroller--mobileVersion"]]: mobileCheck(),
      [className]: className
    });
    return (
      <Container className={classNames} onScroll={this.onScroll} ref={this.scrollerNode}>
        {children}
      </Container>
    );
  }
}
