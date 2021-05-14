import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { UrlTransformer } from "./url-transformer";
import { ProviderInfo } from "./provider-info";
import { ProviderInfoViewModel } from "./provider-info-view-model";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<ShareComponent>) {

    const title = this.getOgProperty('title');
    const url = this.getOgProperty('url');
    const description = this.getOgProperty('description');

    if (title && url && description) {
      this.transformedLinks = this.links.map(item => {
        const urlTransformer = new UrlTransformer(item.url);

        urlTransformer.appendParameter('postUrl', url);
        urlTransformer.appendParameter('isVideo', 'false');
        urlTransformer.appendParameter('postTitle', title);
        if (item.imageUrl) {
          urlTransformer.appendParameter('postImg', item.imageUrl);
        }
        urlTransformer.appendParameter('postDesc', description);
        return {
          name: item.name,
          url: urlTransformer.resultUrl,
          description: `${item.description} will be sent to ${item.name}`
        };
      });
    } else {
      this.transformedLinks = [];
    }
  }

  private getOgProperty(name: string): string | null {
    const titleMeta = document.querySelector(`meta[property='og:${name}']`);
    if (titleMeta) {
      return titleMeta.getAttribute('content');
    }
    return null;
  }

  public onClick(): void {
    this.bottomSheetRef.dismiss();
  }

  public transformedLinks: ProviderInfoViewModel[];
  private links: ProviderInfo[] = [
    {
      url: 'https://www.facebook.com/sharer.php?u=[postUrl]',
      name: 'Facebook',
      description: 'Only the web address of the Greeked and blurred',
      imageUrl: null
    },
    {
      url: 'https://twitter.com/share?url=[postUrl]&text=[postTitle]',
      name: 'Twitter',
      description: 'The web address and page title',
      imageUrl: null
    },//tested
    {
      url: 'https://pinterest.com/pin/create/bookmarklet/?media=[postImg]&url=[postUrl]&is_video=[isVideo]&description=[postTitle]',
      name: 'Pinterest',
      description: 'The web address, image representation and page title',
      imageUrl: 'https://anton-voronov-a.github.io/greeked/assets/social/preview-pinterest.png'
    }, // image= 1500/1000
    {
      url: 'https://www.linkedin.com/shareArticle?url=[postUrl]&title=[postTitle]',
      name: 'Linkedin',
      description: 'The web address and page title',
      imageUrl: null,
    },// tested },
    {
      url: 'https://www.tumblr.com/share/link?url=[postUrl]&name=[postTitle]',
      name: 'Tumblr',
      description: 'The web address and page title',
      imageUrl: null
    },// tested },
    {
      url: 'https://reddit.com/submit?url=[postUrl]&title=[postTitle]',
      name: 'Reddit',
      description: 'The web address and page title',
      imageUrl: null
    },// tested
    {
      url: "https://telegram.me/share/url?url=[postUrl]&text=[postTitle]",
      name: 'Telegram',
      description: 'The web address and page title',
      imageUrl: null
    }
  ];
}
