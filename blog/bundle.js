function debounce (func, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
};

function throttle (func, wait, options) {
  var timeout, context, args
  var previous = 0
  if (!options) options = {}

  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function () {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }

  return throttled
}

function isMobile () {
  var check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera)
  return check
};

function scrollTo (name) {
  var scrollOffset = $(name).offset()
  $('body,html').animate({
    scrollTop: scrollOffset.top
  })
};

function loadScript (url, callback) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  if (script.readyState) { // IE
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' ||
        script.readyState === 'complete') {
        script.onreadystatechange = null
        callback()
      }
    }
  } else { // Others
    script.onload = function () {
      callback()
    }
  }
  script.src = url
  document.body.appendChild(script)
};

function snackbarShow (text, showAction, duration) {
  var a = (typeof showAction !== 'undefined') ? showAction : false
  var d = (typeof duration !== 'undefined') ? duration : 2000
  var position = GLOBAL_CONFIG.Snackbar.position
  var bg = document.documentElement.getAttribute('data-theme') === 'light' ? GLOBAL_CONFIG.Snackbar.bgLight : GLOBAL_CONFIG.Snackbar.bgDark
  Snackbar.show({
    text: text,
    backgroundColor: bg,
    showAction: a,
    duration: d,
    pos: position
  })
}

window.debounce = debounce

window.throttle = throttle

window.isMobile = isMobile;$(function () {
  const isSnackbar = GLOBAL_CONFIG.Snackbar !== undefined
  const isTocContent = $('#sidebar .sidebar-toc__content').children().length > 0
  
  const searchWidth = $('#search_button').outerWidth() !== undefined ? $('#search_button').outerWidth() : 0
  const blogNameWidth = $('#blog_name').width()

  var mw = 0
  for (var i = 0; i < $('#page-header .menus_item').length; i++) {
    mw = mw + $('#page-header .menus_item').eq(i).outerWidth()
  }

  
  function isAdjust (n) {
    var t
    if (n === 1) {
      t = blogNameWidth + searchWidth + mw > $('#page-header').width() - 300
    } else if (n === 2) {
      t = blogNameWidth + searchWidth + mw > $('#page-header').width()
    }

    if (t) {
      headerAdjust()
    } else {
      headerAdjustBack()
    }
  }

  // 初始化header
  isAdjust(2)
  $('#page-header').css({ opacity: '1', animation: 'headerNoOpacity 1s' })

  function headerAdjust () {
    $('#page-header .toggle-menu').addClass('is_visible')
    $('#page-header .menus,.search span').addClass('is_invisible')
  }

  function headerAdjustBack () {
    $('#page-header .toggle-menu').removeClass('is_visible')
    $('#page-header .menus,.search span').removeClass('is_invisible')
  }

  $(window).bind('resize', function () {
    if (window.innerWidth > 768) {
      isAdjust(2)
    } else {
      headerAdjust()
    }
  })

  
  if (GLOBAL_CONFIG.isHome) {
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {} else {
      $('.full_page').css('background-attachment', 'fixed')
    }
  }

  
  if (GLOBAL_CONFIG.isPost) {
    // sidebar 自動打開
    if ($('#sidebar').hasClass('auto_open') && isTocContent) {
      $('#toggle-sidebar').addClass('on')
      setTimeout(function () {
        $('#toggle-sidebar').addClass('on')
        openSidebar()
      }, 400)
      isAdjust(1)
    }

    // pc隱藏
    if (isTocContent) {
      $('#toggle-sidebar').css('opacity', '1')
    } else {
      $('#sidebar,#toggle-sidebar').css('display', 'none')
    }
    // mobile隱藏
    if ($('#mobile-sidebar-toc .sidebar-toc__content').children().length === 0) {
      $('#mobile-sidebar-toc,#mobile-toc-button').css('display', 'none')
    }
  }

  

  function closeSidebar () {
    $('#page-header').removeClass('open-sidebar')
    $('body').animate({
      paddingLeft: 0
    }, 400)
    $('#sidebar').css('transform', 'translateX(0px)')
    $('#toggle-sidebar').css({
      transform: 'rotateZ(0deg)',
      color: '#1F2D3D',
      opacity: '1'
    })
  }

  function openSidebar () {
    $('#page-header').addClass('open-sidebar')
    $('body').animate({
      paddingLeft: 300
    }, 400)
    $('#sidebar').css('transform', 'translateX(300px)')
    $('#toggle-sidebar').css({
      transform: 'rotateZ(180deg)',
      color: '#99a9bf',
      opacity: '1'
    })
  }

  $('#toggle-sidebar').on('click', function () {
    if (!isMobile() && $('#sidebar').is(':visible')) {
      var isOpen = $(this).hasClass('on')
      isOpen ? $(this).removeClass('on') : $(this).addClass('on')
      if (isOpen) {
        closeSidebar()
        setTimeout(function () {
          isAdjust(2)
        }, 500)
      } else {
        isAdjust(1)
        openSidebar()
      }
    }
  })

  
  $('.scroll-down').on('click', function () {
    scrollTo('#content-outer')
  })

  
  $('#bookmark-it').on('click', function () {
    if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '')
    } else if (window.external && ('AddFavorite' in window.external)) { // IE Favorite
      window.external.AddFavorite(location.href, document.title)
    } else if (window.opera && window.print) { // Opera Hotlist
      this.title = document.title
      return true
    } else { // webkit - safari/chrome
      if (isSnackbar) {
        var bookmarkText = GLOBAL_CONFIG.Snackbar.bookmark.message_prev + ' ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Command/Cmd' : 'CTRL') + '+ D ' + GLOBAL_CONFIG.Snackbar.bookmark.message_next + '.'
        snackbarShow(bookmarkText)
      } else {
        alert(GLOBAL_CONFIG.bookmark.message_prev + ' ' + (navigator.userAgent.toLowerCase().indexOf('mac') !== -1 ? 'Command/Cmd' : 'CTRL') + '+ D ' + GLOBAL_CONFIG.bookmark.message_next + '.')
      }
    }
  })

  

  function copy (text, ctx) {
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      try {
        document.execCommand('copy') // Security exception may be thrown by some browsers.
        if (isSnackbar) {
          snackbarShow(GLOBAL_CONFIG.copy.success)
        } else {
          $(ctx).prev('.copy-notice')
            .text(GLOBAL_CONFIG.copy.success)
            .animate({
              opacity: 1,
              right: 30
            }, 450, function () {
              setTimeout(function () {
                $(ctx).prev('.copy-notice').animate({
                  opacity: 0,
                  right: 0
                }, 650)
              }, 400)
            })
        }
      } catch (ex) {
        if (isSnackbar) {
          snackbarShow(GLOBAL_CONFIG.copy.success)
        } else {
          $(ctx).prev('.copy-notice')
            .text(GLOBAL_CONFIG.copy.error)
            .animate({
              opacity: 1,
              right: 30
            }, 650, function () {
              setTimeout(function () {
                $(ctx).prev('.copy-notice').animate({
                  opacity: 0,
                  right: 0
                }, 650)
              }, 400)
            })
          return false
        }
      }
    } else {
      if (isSnackbar) {
        snackbarShow(GLOBAL_CONFIG.copy.noSupport)
      } else {
        $(ctx).prev('.copy-notice').text(GLOBAL_CONFIG.copy.noSupport)
      }
    }
  }
  // click events
  $(document).on('click', '.code-area-wrap .fa-clipboard', function () {
    var selection = window.getSelection()
    var range = document.createRange()
    range.selectNodeContents($(this).parent().siblings('figure').find('.code pre')[0])
    selection.removeAllRanges()
    selection.addRange(range)
    var text = selection.toString()
    copy(text, this)
    selection.removeAllRanges()
  })

  
  $(document).on('click', '.code-area-wrap .code-expand', function () {
    var $figure = $(this).parent().next()
    if ($(this).hasClass('code-closed')) {
      $figure.slideDown(300)
      $(this).removeClass('code-closed')
    } else {
      $figure.slideUp(300)
      $(this).addClass('code-closed')
    }
  })

  

  var isMediumZoom = GLOBAL_CONFIG.medium_zoom
  var isFancybox = GLOBAL_CONFIG.fancybox
  if (isFancybox) {
    $().fancybox({
      selector: '[data-fancybox]',
      loop: true,
      transitionEffect: 'slide',
      protect: true,
      buttons: ['slideShow', 'fullScreen', 'thumbs', 'close']
    })
  } else if (isMediumZoom) {
    const zoom = mediumZoom(document.querySelectorAll(':not(a)>img'))
    zoom.on('open', event => {
      const photoBg = $(document.documentElement).attr('data-theme') === 'dark' ? '#121212' : '#fff'
      zoom.update({
        background: photoBg
      })
    })
  }

  
  function openMobileSidebar (name) {
    $('body').css('overflow', 'hidden')
    $('#body-wrap').css('transform', 'translateX(-250px)')
    $('#page-header').css('transform', 'translateX(-250px)')
    $('#page-header.fixed.visible').css('transform', 'translate3d(-250px, 100%, 0)')
    $('#rightside').css('transform', 'translateX(-288px)')
    $('#menu_mask').fadeIn()

    if (name === 'menu') {
      $('.toggle-menu').removeClass('close').addClass('open')
      $('#mobile-sidebar-menus').css({ transform: 'translateX(-254px)' })
    }

    if (name === 'toc') {
      $('#mobile-toc-button').removeClass('close').addClass('open')
      $('#mobile-sidebar-toc').css('transform', 'translateX(-254px)')
    }
  }

  function closeMobileSidebar (name) {
    $('body').css('overflow', '')
    $('#body-wrap').css('transform', '')
    $('#page-header').css('transform', '')
    $('#page-header.fixed.visible').css('transform', '')
    $('#rightside').css('transform', 'translateX(-38px)')
    $('#menu_mask').fadeOut()

    if (name === 'menu') {
      $('.toggle-menu').removeClass('open').addClass('close')
      $('#mobile-sidebar-menus').css({ transform: 'translateX(0)' })
    }

    if (name === 'toc') {
      $('#mobile-toc-button').removeClass('open').addClass('close')
      $('#mobile-sidebar-toc').css('transform', '')
    }
  }

  $('.toggle-menu').on('click', function () {
    if ($('.toggle-menu').hasClass('close')) {
      openMobileSidebar('menu')
      if ($('#toggle-sidebar').hasClass('on')) {
        $('body').css('padding-left', '0')
        $('#sidebar').css('transform', '')
      }
    }
  })

  $('#mobile-toc-button').on('click', function () {
    if ($('#mobile-toc-button').hasClass('close')) openMobileSidebar('toc')
  })

  $('#menu_mask').on('click touchstart', function (e) {
    if ($('.toggle-menu').hasClass('open')) {
      closeMobileSidebar('menu')
      if ($('#toggle-sidebar').hasClass('on')) {
        setTimeout(function () {
          openSidebar()
        }, 600)
      }
    }
    if ($('#mobile-toc-button').hasClass('open')) {
      closeMobileSidebar('toc')
    }
  })

  $(window).on('resize', function (e) {
    if (!$('.toggle-menu').is(':visible')) {
      if ($('.toggle-menu').hasClass('open')) closeMobileSidebar('menu')
    }
    if (!$('#mobile-toc-button').is(':visible')) {
      if ($('#mobile-toc-button').hasClass('open')) closeMobileSidebar('toc')
    }
  })

  // 點擊toc，收起sidebar
  $('#mobile-sidebar-toc a').on('click', function () {
    closeMobileSidebar('toc')
  })

  
  var initTop = 0
  $('.toc-child').hide()

  // main of scroll
  $(window).scroll(throttle(function (event) {
    var currentTop = $(this).scrollTop()
    if (!isMobile() && isTocContent) {
      // percentage inspired by hexo-theme-next
      scrollPercent(currentTop)
      // head position
      findHeadPosition(currentTop)
      autoScrollToc(currentTop)
    }
    var isUp = scrollDirection(currentTop)

    if (currentTop > 56) {
      if (isUp) {
        if ($('#page-header').hasClass('visible')) $('#page-header').removeClass('visible')
      } else {
        if (!$('#page-header').hasClass('visible')) $('#page-header').addClass('visible')
      }
      $('#page-header').addClass('fixed')

      if ($('#rightside').css('opacity') === '0') {
        $('#rightside').animate({}, function () {
          $(this).css({
            opacity: '1',
            transform: 'translateX(-38px)'
          })
        })
      }
    } else {
      if (currentTop === 0) {
        $('#page-header').removeClass('fixed').removeClass('visible')
      }

      $('#rightside').animate({}, function () {
        $('#rightside').css({
          opacity: '',
          transform: ''
        })
      })
    }
  }, 300))

  // go up smooth scroll
  $('#go-up').on('click', function () {
    scrollTo('body')
  })

  // head scroll
  // $('#post-content').find('h1,h2,h3,h4,h5,h6').on('click', function (e) {
  //   scrollToHead('#' + $(this).attr('id'))
  // })

  // head scroll
  $('.toc-link').on('click', function (e) {
    e.preventDefault()
    scrollToHead($(this).attr('href'))
  })

  // find the scroll direction
  function scrollDirection (currentTop) {
    var result = currentTop > initTop // true is down & false is up
    initTop = currentTop
    return result
  }

  // scroll to a head(anchor)
  function scrollToHead (anchor) {
    scrollTo(anchor)
  }

  // expand toc-item
  function expandToc ($item) {
    if ($item.is(':visible')) {
      return
    }
    $item.fadeIn(400)
  }

  function scrollPercent (currentTop) {
    var docHeight = $('#content-outer').height()
    var winHeight = $(window).height()
    var contentMath = (docHeight > winHeight) ? (docHeight - winHeight) : ($(document).height() - winHeight)
    var scrollPercent = (currentTop) / (contentMath)
    var scrollPercentRounded = Math.round(scrollPercent * 100)
    var percentage = (scrollPercentRounded > 100) ? 100 : scrollPercentRounded
    $('.progress-num').text(percentage)
    $('.sidebar-toc__progress-bar').animate({
      width: percentage + '%'
    }, 100)
  }

  function updateAnchor (anchor) {
    if (window.history.replaceState && anchor !== window.location.hash) {
      window.history.replaceState(undefined, undefined, anchor)
    }
  }

  // find head position & add active class
  // DOM Hierarchy:
  // ol.toc > (li.toc-item, ...)
  // li.toc-item > (a.toc-link, ol.toc-child > (li.toc-item, ...))
  function findHeadPosition (top) {
    // assume that we are not in the post page if no TOC link be found,
    // thus no need to update the status
    if ($('.toc-link').length === 0) {
      return false
    }

    var list = $('#post-content').find('h1,h2,h3,h4,h5,h6')
    var currentId = ''
    list.each(function () {
      var head = $(this)
      if (top > head.offset().top - 25) {
        currentId = '#' + $(this).attr('id')
      }
    })

    if (currentId === '') {
      $('.toc-link').removeClass('active')
      $('.toc-child').hide()
    }

    var currentActive = $('.toc-link.active')
    if (currentId && currentActive.attr('href') !== currentId) {
      updateAnchor(currentId)

      $('.toc-link').removeClass('active')
      var _this = $('.toc-link[href="' + currentId + '"]')
      _this.addClass('active')

      var parents = _this.parents('.toc-child')
      // Returned list is in reverse order of the DOM elements
      // Thus `parents.last()` is the outermost .toc-child container
      // i.e. list of subsections
      var topLink = (parents.length > 0) ? parents.last() : _this
      expandToc(topLink.closest('.toc-item').find('.toc-child'))
      topLink
        // Find all top-level .toc-item containers, i.e. sections
        // excluding the currently active one
        .closest('.toc-item').siblings('.toc-item')
        // Hide their respective list of subsections
        .find('.toc-child').hide()
    }
  }

  function autoScrollToc (currentTop) {
    if ($('.toc-link').hasClass('active')) {
      var activePosition = $('.active').offset().top
      var sidebarScrolltop = $('#sidebar').scrollTop()
      if (activePosition > (currentTop + $(window).height() - 50)) {
        $('#sidebar').scrollTop(sidebarScrolltop + 100)
      } else if (activePosition < currentTop + 50) {
        $('#sidebar').scrollTop(sidebarScrolltop - 100)
      }
    }
  }

  
  $('#readmode').click(function () {
    var isDark = $(document.documentElement).attr('data-theme') === 'dark'
    var isNull = $(document.documentElement).attr('data-theme') === ''
    $('body').toggleClass('read-mode')
    $('#to_comment').toggleClass('is_invisible')
    if (isNull) $(document.documentElement).attr('data-theme', 'dark')
    if (isDark) $(document.documentElement).attr('data-theme', '')
  })

  

  function fontAdjust (name) {
    var fontSizeRecord = parseFloat($('body').css('font-size'))
    var preSizeRecord = parseFloat($('pre').css('font-size'))
    var codeSizeRecord = parseFloat($('code').css('font-size'))
    if (name === 'plus') {
      $('body').css('font-size', fontSizeRecord + 1)
      $('pre').css('font-size', preSizeRecord + 1)
      $('code').css('font-size', codeSizeRecord + 1)
    } else {
      $('body').css('font-size', fontSizeRecord - 1)
      $('pre').css('font-size', preSizeRecord - 1)
      $('code').css('font-size', codeSizeRecord - 1)
    }
  }

  $('#font_plus').click(function () {
    fontAdjust('plus')
  })

  $('#font_minus').click(function () {
    fontAdjust('minus')
  })

  
  $('.menus-expand').on('click', function () {
    if ($(this).hasClass('menus-closed')) {
      $(this).parents('.menus_item').find('.menus_item_child').slideDown()
      $(this).removeClass('menus-closed')
    } else {
      $(this).parents('.menus_item').find('.menus_item_child').slideUp()
      $(this).addClass('menus-closed')
    }
  })

  
  $('#rightside_config').on('click', function () {
    if ($('#rightside-config-hide').hasClass('rightside-in')) {
      $('#rightside-config-hide').removeClass('rightside-in').addClass('rightside-out')
    } else {
      $('#rightside-config-hide').removeClass('rightside-out').addClass('rightside-in')
    }
  })

  
  var copyright = GLOBAL_CONFIG.copyright
  if (copyright !== undefined) {
    document.body.oncopy = event => {
      event.preventDefault()
      let textFont; const copyFont = window.getSelection(0).toString()
      if (copyFont.length > 45) {
        textFont = copyFont + '\n' + '\n' + '\n' +
          copyright.languages.author + '\n' +
          copyright.languages.link + '\n' +
          copyright.languages.source + '\n' +
          copyright.languages.info
      } else {
        textFont = copyFont
      }
      if (event.clipboardData) {
        return event.clipboardData.setData('text', textFont)
      } else {
        // 兼容IE
        return window.clipboardData.setData('text', textFont)
      }
    }
  }

  

  if ($('.justified-gallery').length) {
    $('.justified-gallery > p > .fancybox').unwrap()
    $('head').append('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/css/justifiedGallery.min.css">')
    loadScript('https://cdn.jsdelivr.net/npm/justifiedGallery@3.7.0/dist/js/jquery.justifiedGallery.min.js', function () {
      if (typeof ($.fn.justifiedGallery) === 'function') {
        $('.justified-gallery').justifiedGallery({
          rowHeight: 220,
          margins: 4
        })
      }
    })
  }

  

  if (typeof autoChangeMode !== 'undefined') {
    if (autoChangeMode === '1' || autoChangeMode === '2') {
      if (Cookies.get('theme') === 'dark') {
        changeLightIcon()
      } else {
        changeDarkIcon()
      }
    }
  }

  function changeLightIcon () {
    $('#darkmode').removeClass('fa-moon-o').addClass('fa-sun-o')
  }

  function changeDarkIcon () {
    $('#darkmode').removeClass('fa-sun-o').addClass('fa-moon-o')
  }

  function switchReadMode () {
    var nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
      changeLightIcon()
      activateDarkMode()
      Cookies.set('theme', 'dark', {
        expires: 2
      })
      if (isSnackbar) snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    } else {
      changeDarkIcon()
      activateLightMode()
      Cookies.set('theme', 'light', {
        expires: 2
      })
      if (isSnackbar) snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
  }

  $('#darkmode').click(function () {
    switchReadMode()
  })

  
  if (GLOBAL_CONFIG.runtime) {
    // get user config
    var startDate = $('#webinfo-runtime-count').attr('start_date')
    var showDateTime = function () {
      var BirthDay = new Date(startDate)
      var today = new Date()
      var timeold = (today.getTime() - BirthDay.getTime())
      var msPerDay = 24 * 60 * 60 * 1000
      var eDaysold = timeold / msPerDay
      var daysold = Math.floor(eDaysold)
      $('.webinfo-runtime-count').text(daysold + ' ' + GLOBAL_CONFIG.runtime_unit)
    }

    var interval
    showDateTime()
    clearInterval(interval)
    interval = setInterval(showDateTime, 10000)
  }

  

  if (GLOBAL_CONFIG.localSearch === undefined && GLOBAL_CONFIG.algolia !== undefined) {
    $('a.social-icon.search').on('click', function () {
      openSearch()
      $('.ais-search-box--input').focus()
    })
    $('.search-mask, .search-close-button').on('click', closeSearch)

    var algolia = GLOBAL_CONFIG.algolia
    var isAlgoliaValid = algolia.appId && algolia.apiKey && algolia.indexName
    if (!isAlgoliaValid) {
      return console.error('Algolia setting is invalid!')
    }
    var search = instantsearch({
      appId: algolia.appId,
      apiKey: algolia.apiKey,
      indexName: algolia.indexName,
      searchParameters: {
        hitsPerPage: algolia.hits.per_page || 10
      },
      searchFunction: function (helper) {
        var searchInput = $('#algolia-search-input').find('input')

        if (searchInput.val()) {
          helper.search()
        }
      }
    })

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#algolia-search-input',
        reset: false,
        magnifier: false,
        placeholder: GLOBAL_CONFIG.algolia.languages.input_placeholder
      })
    )
    search.addWidget(
      instantsearch.widgets.hits({
        container: '#algolia-hits',
        templates: {
          item: function (data) {
            var link = data.permalink ? data.permalink : (GLOBAL_CONFIG.root + data.path)
            return (
              '<a href="' + link + '" class="algolia-hit-item-link">' +
              data._highlightResult.title.value +
              '</a>'
            )
          },
          empty: function (data) {
            return (
              '<div id="algolia-hits-empty">' +
              GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/, data.query) +
              '</div>'
            )
          }
        },
        cssClasses: {
          item: 'algolia-hit-item'
        }
      })
    )

    search.addWidget(
      instantsearch.widgets.stats({
        container: '#algolia-stats',
        templates: {
          body: function (data) {
            var stats = GLOBAL_CONFIG.algolia.languages.hits_stats
              .replace(/\$\{hits}/, data.nbHits)
              .replace(/\$\{time}/, data.processingTimeMS)
            return (
              '<hr>' +
              stats +
              '<span class="algolia-logo pull_right">' +
              '  <img src="' + GLOBAL_CONFIG.root + 'img/algolia.svg" alt="Algolia" />' +
              '</span>'
            )
          }
        }
      })
    )

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#algolia-pagination',
        scrollTo: false,
        showFirstLast: false,
        labels: {
          first: '<i class="fa fa-angle-double-left"></i>',
          last: '<i class="fa fa-angle-double-right"></i>',
          previous: '<i class="fa fa-angle-left"></i>',
          next: '<i class="fa fa-angle-right"></i>'
        },
        cssClasses: {
          root: 'pagination',
          item: 'pagination-item',
          link: 'page-number',
          active: 'current',
          disabled: 'disabled-item'
        }
      })
    )
    search.start()
  }
  if (GLOBAL_CONFIG.localSearch !== undefined && GLOBAL_CONFIG.algolia === undefined) {
    $('a.social-icon.search').on('click', function () {
      var loadFlag = false
      openSearch()
      $('#local-search-input input').focus()
      if (!loadFlag) {
        localSearch(GLOBAL_CONFIG.localSearch.path)
        loadFlag = true
      }
    })

    $('.search-mask, .search-close-button').on('click', closeSearch)

    var localSearch = function (path) {
      $.ajax({
        url: GLOBAL_CONFIG.root + path,
        dataType: 'xml',
        success: function (xmlResponse) {
          // get the contents from search data
          var datas = $('entry', xmlResponse).map(function () {
            return {
              title: $('title', this).text(),
              content: $('content', this).text(),
              url: $('url', this).text()
            }
          }).get()
          var $input = $('#local-search-input input')[0]
          var $resultContent = $('#local-hits')[0]
          $input.addEventListener('input', function () {
            var str = '<div class="search-result-list">'
            var keywords = this.value.trim().toLowerCase().split(/[\s]+/)
            $resultContent.innerHTML = ''
            if (this.value.trim().length <= 0) {
              $('.local-search-stats__hr').hide()
              return
            }
            var count = 0
            // perform local searching
            datas.forEach(function (data) {
              var isMatch = true
              var dataTitle = data.title.trim().toLowerCase()
              var dataContent = data.content.trim().replace(/<[^>]+>/g, '').toLowerCase()
              var dataUrl = data.url
              var indexTitle = -1
              var indexContent = -1
              // only match artiles with not empty titles and contents
              if (dataTitle !== '' && dataContent !== '') {
                keywords.forEach(function (keyword, i) {
                  indexTitle = dataTitle.indexOf(keyword)
                  indexContent = dataContent.indexOf(keyword)
                  if (indexTitle < 0 && indexContent < 0) {
                    isMatch = false
                  } else {
                    if (indexContent < 0) {
                      indexContent = 0
                    }
                  }
                })
              }
              // show search results
              if (isMatch) {
                str += '<div class="local-search__hit-item"><a href="' + dataUrl + '" class="search-result-title">' + dataTitle + '</a>' + '</div>'
                count += 1
                $('.local-search-stats__hr').show()
              }
            })
            if (count === 0) {
              str += '<div id="local-search__hits-empty">' + GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) +
                '</div>'
            }
            $resultContent.innerHTML = str
          })
        }
      })
    }
  }

  function openSearch () {
    $('body').css('width', '100%')
    $('body').css('overflow', 'hidden')

    $('.search-dialog').css({
      display: 'block'
    })

    $('.search-mask').fadeIn()

    // shortcut: ESC
    document.addEventListener('keydown', function f (event) {
      if (event.code === 'Escape') {
        closeSearch()
        document.removeEventListener('keydown', f)
      }
    })
  }

  function closeSearch () {
    $('body').css('width', '')
    $('body').css('overflow', '')
    $('.search-dialog').css({
      animation: 'search_close .5s'
    })
    $('.search-dialog').animate({}, function () {
      setTimeout(function () {
        $('.search-dialog').css({
          animation: '',
          display: 'none'
        })
      }, 500)
    })

    $('.search-mask').fadeOut()
  }

  if (GLOBAL_CONFIG.baiduPush) {
    (function () {
      var bp = document.createElement('script')
      var curProtocol = window.location.protocol.split(':')[0]
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
      } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
      }
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(bp, s)
    })()
  }
});var translate = GLOBAL_CONFIG.translate;
var Snackbar_tl = GLOBAL_CONFIG.Snackbar;

var defaultEncoding = translate.defaultEncoding; // 网站默认语言，1: 繁體中文, 2: 简体中文
var translateDelay = translate.translateDelay; //延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
var cookieDomain = translate.cookieDomain; //更改为你的博客网址
var msgToTraditionalChinese = translate.msgToTraditionalChinese; //此处可以更改为你想要显示的文字
var msgToSimplifiedChinese = translate.msgToSimplifiedChinese; //同上，但两处均不建议更改
var translateButtonId = "translateLink"; //默认互换id
var currentEncoding = defaultEncoding;
var targetEncodingCookie = "targetEncoding" + cookieDomain.replace(/\./g, "");
var targetEncoding =
  Cookies.get(targetEncodingCookie) == null
    ? defaultEncoding
    : Cookies.get(targetEncodingCookie);
var translateButtonObject;
var isSnackbar = GLOBAL_CONFIG.Snackbar !== undefined ? true : false;

function translateText(txt) {
  if (txt == "" || txt == null) return "";
  if (currentEncoding == 1 && targetEncoding == 2) return Simplized(txt);
  else if (currentEncoding == 2 && targetEncoding == 1)
    return Traditionalized(txt);
  else return txt;
}
function translateBody(fobj) {
  if (typeof fobj == "object") var objs = fobj.childNodes;
  else var objs = document.body.childNodes;
  for (var i = 0; i < objs.length; i++) {
    var obj = objs.item(i);
    if (
      "||BR|HR|TEXTAREA|".indexOf("|" + obj.tagName + "|") > 0 ||
      obj == translateButtonObject
    )
      continue;
    if (obj.title != "" && obj.title != null)
      obj.title = translateText(obj.title);
    if (obj.alt != "" && obj.alt != null) obj.alt = translateText(obj.alt);
    if (
      obj.tagName == "INPUT" &&
      obj.value != "" &&
      obj.type != "text" &&
      obj.type != "hidden"
    )
      obj.value = translateText(obj.value);
    if (obj.nodeType == 3) obj.data = translateText(obj.data);
    else translateBody(obj);
  }
}
function translatePage() {
  if (targetEncoding == 1) {
    currentEncoding = 1;
    targetEncoding = 2;
    translateButtonObject.innerHTML = msgToTraditionalChinese;
    Cookies.set(targetEncodingCookie, targetEncoding, {
      expires: 7,
      path: "/"
    });
    translateBody();
    if (isSnackbar) snackbarShow(Snackbar_tl.cht_to_chs);
  } else if (targetEncoding == 2) {
    currentEncoding = 2;
    targetEncoding = 1;
    translateButtonObject.innerHTML = msgToSimplifiedChinese;
    Cookies.set(targetEncodingCookie, targetEncoding, {
      expires: 7,
      path: "/"
    });
    translateBody();
    if (isSnackbar) snackbarShow(Snackbar_tl.chs_to_cht);
  }
}
function JTPYStr() {
  return "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾";
}
function FTPYStr() {
  return "萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽";
}
function Traditionalized(cc) {
  var str = "";
  var ss = JTPYStr();
  var tt = FTPYStr();
  for (var i = 0; i < cc.length; i++) {
    if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) != -1)
      str += tt.charAt(ss.indexOf(cc.charAt(i)));
    else str += cc.charAt(i);
  }
  return str;
}
function Simplized(cc) {
  var str = "";
  var ss = JTPYStr();
  var tt = FTPYStr();
  for (var i = 0; i < cc.length; i++) {
    if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1)
      str += ss.charAt(tt.indexOf(cc.charAt(i)));
    else str += cc.charAt(i);
  }
  return str;
}
function translateInitilization() {
  translateButtonObject = document.getElementById(translateButtonId);
  if (translateButtonObject) {
    with (translateButtonObject) {
      if (typeof document.all != "object") {
        href = "javascript:translatePage();";
      } else {
        href = "#";
        onclick = new Function("translatePage(); return false;");
      }
    }
    if (currentEncoding != targetEncoding) {
      setTimeout("translateBody()", translateDelay);
      if (targetEncoding == 1)
        translateButtonObject.innerHTML = msgToSimplifiedChinese;
      else translateButtonObject.innerHTML = msgToTraditionalChinese;
    }
  }
}

(function() {
  translateInitilization()
})()