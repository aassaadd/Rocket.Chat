import Page from './Page';

class FlexTab extends Page {
	get membersTab() { return browser.element('.flex-tab-bar .icon-users'); }
	get membersTabContent() { return browser.element('.animated'); }
	get userSearchBar() { return browser.element('#user-add-search'); }
	get removeUserBtn() { return browser.element('.remove-user'); }
	get setOwnerBtn() { return browser.element('.set-owner'); }
	get setModeratorBtn() { return browser.element('.set-moderator'); }
	get muteUserBtn() { return browser.element('.mute-user'); }
	get viewAllBtn() { return browser.element('.button.back'); }
	get startVideoCall() { return browser.element('.start-video-call'); }
	get startAudioCall() { return browser.element('.start-audio-call'); }
	get showAll() { return browser.element('.see-all'); }

	get channelTab() { return browser.element('.flex-tab-bar .tab-button:not(.hidden) .icon-info-circled'); }
	get channelSettings() { return browser.element('.channel-settings'); }

	get searchTab() { return browser.element('.flex-tab-bar .icon-search'); }
	get searchTabContent() { return browser.element('.search-messages-list'); }
	get messageSearchBar() { return browser.element('#message-search'); }
	get searchResult() { return browser.element('.new-day'); }

	get notificationsTab() { return browser.element('.flex-tab-bar .icon-bell-alt'); }
	get notificationsSettings() { return browser.element('.push-notifications'); }

	get filesTab() { return browser.element('.flex-tab-bar .icon-attach'); }
	get fileItem() { return browser.element('.uploaded-files-list ul:first-child'); }
	get filesTabContent() { return browser.element('.uploaded-files-list'); }
	get fileDelete() { return browser.element('.uploaded-files-list ul:first-child .file-delete'); }
	get fileDownload() { return browser.element('.uploaded-files-list ul:first-child .file-download'); }
	get fileName() { return browser.element('.uploaded-files-list ul:first-child .room-file-item'); }

	get mentionsTab() { return browser.element('.flex-tab-bar .icon-at'); }
	get mentionsTabContent() { return browser.element('.mentioned-messages-list'); }

	get starredTab() { return browser.element('.flex-tab-bar .icon-star'); }
	get starredTabContent() { return browser.element('.starred-messages-list'); }

	get pinnedTab() { return browser.element('.flex-tab-bar .icon-pin'); }
	get pinnedTabContent() { return browser.element('.pinned-messages-list'); }

	get archiveBtn() { return browser.element('.clearfix:last-child .icon-pencil'); }
	get archiveRadio() { return browser.element('.editing'); }
	get archiveSave() { return browser.element('.save'); }
	get editNameBtn() { return browser.element('[data-edit="name"]'); }
	get editTopicBtn() { return browser.element('[data-edit="topic"]'); }
	get editDescriptionBtn() { return browser.element('[data-edit="description"]'); }
	get editNotificationBtn() { return browser.element('[data-edit="desktopNotifications"]'); }
	get editMobilePushBtn() { return browser.element('[data-edit="mobilePushNotifications"]'); }
	get editEmailNotificationBtn() { return browser.element('[data-edit="emailNotifications"]'); }
	get editUnreadAlertBtn() { return browser.element('[data-edit="unreadAlert"]'); }

	get editNameTextInput() { return browser.element('.channel-settings input[name="name"]'); }
	get editTopicTextInput() { return browser.element('.channel-settings input[name="topic"]'); }
	get editDescriptionTextInput() { return browser.element('.channel-settings input[name="description"]'); }
	get firstSetting() { return browser.element('.clearfix li:nth-child(1) .current-setting'); }
	get secondSetting() { return browser.element('.clearfix li:nth-child(2) .current-setting'); }
	get thirdSetting() { return browser.element('.clearfix li:nth-child(3) .current-setting'); }
	get editNameTextInput() { return browser.element('.channel-settings input[name="name"]'); }
	get editNameSave() { return browser.element('.channel-settings .save'); }
	get memberUserName() { return browser.element('.info h3'); }
	get memberRealName() { return browser.element('.info p'); }

	get confirmBtn() { return browser.element('.confirm'); }

	get sweetAlertOverlay() { return browser.element('.sweet-overlay'); }
	get toastAlert() { return browser.element('.toast'); }

	getUserEl(username) { return browser.element(`.flex-tab button[title="${username}"] > p`); }

	confirmPopup() {
		this.confirmBtn.waitForVisible(5000);
		this.confirmBtn.click();
		this.sweetAlertOverlay.waitForVisible(5000, true);
	}

	dismissToast() {
		this.toastAlert.click();
	}

	archiveChannel() {
		this.archiveBtn.waitForVisible();
		this.archiveBtn.click();
		this.archiveRadio.waitForVisible();
		this.archiveRadio.click();
		this.archiveSave.click();
	}

	addPeopleToChannel(user) {
		this.userSearchBar.waitForVisible();
		this.userSearchBar.setValue(user);
		browser.waitForVisible('.-autocomplete-item', 5000);
		browser.click('.-autocomplete-item');
	}

	removePeopleFromChannel(user) {
		const userEl = this.getUserEl(user);
		userEl.waitForVisible();
		userEl.click();
		this.removeUserBtn.click();
	}

	setUserOwner(user) {
		const userEl = this.getUserEl(user);
		userEl.waitForVisible();
		userEl.click();
		this.setOwnerBtn.waitForVisible(5000);
		this.setOwnerBtn.click();
		this.viewAllBtn.click();
		browser.pause(100);
	}

	setUserModerator(user) {
		const userEl = this.getUserEl(user);
		userEl.waitForVisible();
		userEl.click();
		this.setModeratorBtn.waitForVisible();
		this.setModeratorBtn.click();
		this.viewAllBtn.click();
		browser.pause(100);
	}

	muteUser(user) {
		const userEl = this.getUserEl(user);
		if (this.showAll.isVisible()) {
			this.muteUserBtn.waitForVisible(5000);
			this.muteUserBtn.click();
		} else {
			userEl.waitForVisible(5000);
			userEl.click();
			this.muteUserBtn.waitForVisible(5000);
			this.muteUserBtn.click();
		}
	}
}

module.exports = new FlexTab();
